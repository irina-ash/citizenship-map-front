import { useCallback, useEffect, useMemo, useState } from "react";

import {
  IUseDraggableCore,
  IUseDraggableCoreResult,
  IUseDraggableCoreState,
  TControlPosition,
  TDragStart,
  TEventHandler,
  TMouseTouchEvent,
  TRef,
  TTouchIdentifier,
} from "./types";

import { EVENTS_FOR, EVENT_OPT } from "./constants";
import {
  addUserSelectStyles,
  createCoreData,
  getControlPosition,
  getTouchIdentifier,
  removeUserSelectStyles,
  snapToGrid,
} from "./utils";

const useDraggableCore = (
  params: IUseDraggableCore,
): IUseDraggableCoreResult => {
  const {
    allowAnyClick = false,
    disabled = false,
    enableUserSelect = false,
    grid,
    offsetParent,
    onDrag,
    onStart,
    onStop,
  } = params || {};

  const [element, setElement] = useState<TRef>(null);
  const [handle, setHandle] = useState<TRef>(null);
  const [cancel, setCancel] = useState<TRef>(null);

  const [state, setStateDefault] = useState<IUseDraggableCoreState>({
    dragging: false,
    eventFor: "mouse",
    lastX: null,
    lastY: null,
    touchIdentifier: null,
  });

  const setState = useCallback(
    (newState: Partial<IUseDraggableCoreState>) =>
      setStateDefault({ ...state, ...newState }),
    [state],
  );

  const { dragging, eventFor, lastX, lastY, touchIdentifier } = state;

  const getPosition = useCallback(
    (e: TMouseTouchEvent, touchId: TTouchIdentifier = touchIdentifier) =>
      getControlPosition(e, touchId, element, offsetParent),
    [offsetParent, element, touchIdentifier],
  );

  const getCoreData = useCallback(
    (x: number, y: number) => createCoreData(element, lastX, lastY, x, y),
    [element, lastX, lastY],
  );

  const toGrid = useCallback(
    (position: TControlPosition, drag = false): TControlPosition => {
      if (Array.isArray(grid)) {
        const x = position.x - (drag ? lastX : lastX || 0);
        const y = position.y - (drag ? lastY : lastY || 0);

        const [deltaX, deltaY] = snapToGrid(grid, x, y);
        return { x: lastX + deltaX, y: lastY + deltaY };
      }

      return null;
    },
    [grid, lastX, lastY],
  );

  const events = useMemo(() => EVENTS_FOR[eventFor], [eventFor]);

  const dragStartHandler: TDragStart = useCallback(
    (e, eventFor) => {
      const { ownerDocument } = element;
      const targetIsElement = e.target instanceof Element;

      if (!targetIsElement) throw new Error("Target event is not Element");

      const isDefaultView = e.target instanceof ownerDocument.defaultView.Node;
      const isHandle = handle ? handle.isSameNode(e.target) : true;
      const isCancel = cancel?.isSameNode(e.target);

      const abort = disabled || !isDefaultView || !isHandle || isCancel;

      if (abort) return;

      if (eventFor === "touch") e.preventDefault();

      const touchIdentifier = getTouchIdentifier(e);

      const position = getPosition(e, touchIdentifier);
      if (position == null) return;

      const { x, y } = position;

      const coreEvent = getCoreData(x, y);

      const shouldUpdate = onStart?.(e, coreEvent);
      if (shouldUpdate === false) return;

      setState({
        dragging: true,
        eventFor,
        lastX: x,
        lastY: y,
        touchIdentifier,
      });
    },
    [
      setState,
      element,
      cancel,
      disabled,
      handle,
      onStart,
      getPosition,
      getCoreData,
    ],
  );

  const dragEndHandler: EventListenerOrEventListenerObject = useCallback(
    (e: TMouseTouchEvent) => {
      const defaultPosition = getPosition(e);
      if (defaultPosition == null) return;

      const position = toGrid(defaultPosition) || defaultPosition;

      const { x, y } = position;

      const coreEvent = getCoreData(x, y);

      const shouldContinue = onStop?.(e, coreEvent);
      if (shouldContinue === false) return false;

      setState({ dragging: false, lastX: null, lastY: null });
    },
    [setState, getPosition, toGrid, getCoreData, onStop],
  );

  const dragHandler: EventListenerOrEventListenerObject = useCallback(
    (e: TMouseTouchEvent) => {
      if (!dragging) return;

      const defaultPosition = getPosition(e);
      if (defaultPosition === null) return;

      const position = toGrid(defaultPosition, true) || defaultPosition;

      const { x, y } = position;

      const coreEvent = getCoreData(x, y);

      const shouldUpdate = onDrag?.(e, coreEvent);
      if (shouldUpdate === false) dragEndHandler(new MouseEvent("mouseup"));

      setState({ lastX: x, lastY: y });
    },
    [
      dragging,
      dragEndHandler,
      getCoreData,
      getPosition,
      onDrag,
      setState,
      toGrid,
    ],
  );

  useEffect(() => {
    if (dragging) {
      document.addEventListener(events.move, dragHandler, EVENT_OPT);
      document.addEventListener(events.stop, dragEndHandler, EVENT_OPT);
    }

    return () => {
      document.removeEventListener(events.move, dragHandler, EVENT_OPT);
      document.removeEventListener(events.stop, dragEndHandler, EVENT_OPT);
    };
  }, [dragging, dragEndHandler, dragHandler, events]);

  useEffect(() => {
    if (!enableUserSelect) {
      if (dragging) {
        addUserSelectStyles();
      } else {
        removeUserSelectStyles();
      }
    }
  }, [dragging, enableUserSelect]);

  const onMouseDown: TEventHandler<MouseEvent> = useCallback(
    e => {
      if (!allowAnyClick && typeof e.button === "number" && e.button !== 0)
        return;
      dragStartHandler(e, "mouse");
    },
    [dragStartHandler, allowAnyClick],
  );

  const onTouchStart: TEventHandler<TouchEvent> = useCallback(
    e => dragStartHandler(e, "touch"),
    [dragStartHandler],
  );

  useEffect(() => {
    if (element) {
      element.addEventListener("mousedown", onMouseDown);
      element.addEventListener("touchstart", onTouchStart);
      return () => {
        element.removeEventListener("mousedown", onMouseDown);
        element.removeEventListener("touchstart", onTouchStart);
      };
    }
  }, [element, onMouseDown, onTouchStart]);

  return {
    cancel: setCancel,
    dragging,
    handle: setHandle,
    ref: setElement,
  };
};

export default useDraggableCore;
