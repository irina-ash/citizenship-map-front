import { useCallback, useMemo, useState } from "react";

import useDraggableCore from "../useDraggableCore";

import {
  IUseDraggable,
  IUseDraggableResult,
  IUseDraggableState,
} from "./types";
import { TDraggableEventHandler, TRef } from "../useDraggableCore/types";

import {
  createCSSTransform,
  createDraggableData,
  getBoundPosition,
} from "./utils";

const useDraggable = (params: IUseDraggable = {}): IUseDraggableResult => {
  const {
    axis = "both",
    position,
    defaultPosition = { x: 0, y: 0 },
    positionOffset,
    onStart,
    bounds,
    onStop,
    onDrag,
    ...restParams
  } = params;

  const controlled = !!position;

  const [element, setElement] = useState<TRef>(null);
  const [boundsRef, setBoundsRef] = useState<TRef>(null);

  const [state, setStateDefault] = useState<IUseDraggableState>({
    dragged: false,
    slackX: 0,
    slackY: 0,
    x: position ? position.x : defaultPosition.x,
    y: position ? position.y : defaultPosition.y,
  });

  const setState = useCallback(
    (newState: Partial<IUseDraggableState>) =>
      setStateDefault({ ...state, ...newState }),
    [state],
  );

  const { dragged, slackX, slackY, x: xState, y: yState } = state;

  const x = position ? position.x : xState;
  const y = position ? position.y : yState;

  const onDragStart: TDraggableEventHandler = useCallback(
    (e, coreData) => {
      const shouldStart = onStart?.(e, createDraggableData(x, y, coreData));
      if (shouldStart === false) return false;

      setState({ dragged: true });
    },
    [onStart, x, y, setState],
  );

  const onDragStop: TDraggableEventHandler = useCallback(
    (e, coreData) => {
      const shouldContinue = onStop?.(e, createDraggableData(x, y, coreData));
      if (shouldContinue === false) return false;

      setState({
        slackX: 0,
        slackY: 0,
        ...(controlled && { x: position.x, y: position.y }),
      });
    },
    [controlled, onStop, position, setState, x, y],
  );

  const onDragContinue: TDraggableEventHandler = useCallback(
    (e, coreData) => {
      const uiData = createDraggableData(x, y, coreData);

      const newState: Partial<IUseDraggableState> = {
        x: uiData.x,
        y: uiData.y,
      };

      if (bounds || boundsRef) {
        const { x: uiDataX, y: uiDataY } = uiData;

        newState.x += slackX;
        newState.y += slackY;

        const [newStateX, newStateY] = getBoundPosition(
          element,
          boundsRef,
          bounds,
          newState.x,
          newState.y,
        );
        newState.x = newStateX;
        newState.y = newStateY;

        newState.slackX = slackX + (uiDataX - newState.x);
        newState.slackY = slackY + (uiDataY - newState.y);

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - x;
        uiData.deltaY = newState.y - y;
      }

      const shouldUpdate = onDrag?.(e, uiData);
      if (shouldUpdate === false) return false;

      setState(newState);
    },
    [bounds, boundsRef, onDrag, setState, slackX, slackY, x, y, element],
  );

  const { dragging, ref, ...restCore } = useDraggableCore({
    onDrag: onDragContinue,
    onStart: onDragStart,
    onStop: onDragStop,
    ...restParams,
  });

  const draggable = !controlled || dragging;

  const canDragX = axis === "both" || axis === "x";
  const canDragY = axis === "both" || axis === "y";

  const validPosition = position || defaultPosition;

  const transformOpts = useMemo(
    () => ({
      x: canDragX && draggable ? x : validPosition.x,
      y: canDragY && draggable ? y : validPosition.y,
    }),
    [canDragX, canDragY, draggable, validPosition, x, y],
  );

  const style = useMemo(
    () => createCSSTransform(transformOpts, positionOffset),
    [transformOpts, positionOffset],
  );

  return {
    ...restCore,
    bounds: setBoundsRef,
    dragged,
    dragging,
    ref: element => {
      setElement(element);
      ref(element);
    },
    style,
  };
};

export default useDraggable;
