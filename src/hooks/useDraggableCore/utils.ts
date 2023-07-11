import {
  IDraggableData,
  TControlPosition,
  TCord,
  TGrid,
  TMouseTouchEvent,
  TOffset,
  TRef,
  TTouchIdentifier,
} from "./types";

import { SELECT_STYLE_CLASS_NAME, SELECT_STYLE_ID } from "./constants";

export const getTouchIdentifier = (e: TMouseTouchEvent): TTouchIdentifier => {
  if (!(e instanceof TouchEvent)) return null;
  const { changedTouches, targetTouches } = e;
  if (targetTouches?.[0]) return targetTouches[0].identifier;
  if (changedTouches?.[0]) return changedTouches[0].identifier;
  return null;
};

export const getControlPosition = (
  e: TMouseTouchEvent,
  touchIdentifier: TTouchIdentifier,
  element: TRef,
  customOffsetParent?: HTMLElement,
): TControlPosition => {
  const hasTouchIdentifier = typeof touchIdentifier === "number";
  const isMouseEvent = e instanceof MouseEvent;

  const touchOffset = hasTouchIdentifier ? getTouch(e, touchIdentifier) : null;
  if (hasTouchIdentifier && !touchOffset) return null;

  const offsetParent =
    customOffsetParent || element.offsetParent || document.body;
  const offset: TOffset = isMouseEvent
    ? { clientX: e.clientX, clientY: e.clientY }
    : null;

  return offsetFromParent(touchOffset || offset, offsetParent);
};

export const getTouch = (
  e: TMouseTouchEvent,
  identifier: TTouchIdentifier,
): TOffset => {
  if (!(e instanceof TouchEvent)) return null;
  return (
    (e.targetTouches &&
      Array.from(e.targetTouches).find(t => identifier === t.identifier)) ||
    (e.targetTouches &&
      Array.from(e.changedTouches).find(t => identifier === t.identifier))
  );
};

export const offsetFromParent = (
  offset: TOffset,
  offsetParent: Element,
): TControlPosition => {
  const isBody = offsetParent === offsetParent.ownerDocument.body;
  const offsetParentRect = isBody
    ? { left: 0, top: 0 }
    : offsetParent.getBoundingClientRect();

  const x = offset.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  const y = offset.clientY + offsetParent.scrollTop - offsetParentRect.top;

  return { x, y };
};

export const createCoreData = (
  element: TRef,
  lastX: TCord,
  lastY: TCord,
  x: number,
  y: number,
): IDraggableData => {
  const isStart = !(typeof lastX === "number" && !Number.isNaN(lastX));

  const shared = { node: element, x, y };
  return isStart
    ? { ...shared, deltaX: 0, deltaY: 0, lastX: x, lastY: y }
    : {
        ...shared,
        deltaX: x - lastX,
        deltaY: y - lastY,
        lastX: lastX,
        lastY: lastY,
      };
};

export const addUserSelectStyles = () => {
  const styleEl = document.getElementById(SELECT_STYLE_ID);

  if (!styleEl) {
    const newStyleEl = document.createElement("style");
    newStyleEl.type = "text/css";
    newStyleEl.id = SELECT_STYLE_ID;
    newStyleEl.innerHTML = `
      .${SELECT_STYLE_CLASS_NAME} *::-moz-selection {all: inherit;}\n
      .${SELECT_STYLE_CLASS_NAME} *::selection {all: inherit;}\n
    `;
    document.getElementsByTagName("head")[0].appendChild(newStyleEl);
  }
  document.body.classList.add(SELECT_STYLE_CLASS_NAME);
};

export const removeUserSelectStyles = () => {
  try {
    if (document.body) document.body.classList.remove(SELECT_STYLE_CLASS_NAME);

    const selection = (document.defaultView || window).getSelection();
    if (selection && selection.type !== "Caret") {
      selection.removeAllRanges();
    }
  } catch (e) {
    /*probably IE*/
  }
};

export const snapToGrid = (
  grid: TGrid,
  pendingX: number,
  pendingY: number,
): [number, number] => {
  const x = Math.round(pendingX / grid[0]) * grid[0];
  const y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
};
