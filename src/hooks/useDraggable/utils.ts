import { CSSProperties } from "react";

import { IBoundsParams, TBounds, TOffsetControlPosition } from "./types";
import {
  IDraggableData,
  TControlPosition,
  TRef,
} from "../useDraggableCore/types";

export const createCSSTransform = (
  position: TControlPosition,
  positionOffset?: TOffsetControlPosition,
): CSSProperties => {
  const { x, y } = positionOffset || position;
  return {
    transform: `translate(${getCSSValue(x)},${getCSSValue(y)})`,
  };
};

export const getCSSValue = (val: number | string, unit = "px") =>
  typeof val === "string" ? val : `${val}${unit}`;

export const createDraggableData = (
  x: number,
  y: number,
  coreData: IDraggableData,
): IDraggableData => ({
  deltaX: coreData.deltaX,
  deltaY: coreData.deltaY,
  lastX: x,
  lastY: y,
  node: coreData.node,
  x: x + coreData.deltaX,
  y: y + coreData.deltaY,
});

export const getBoundPosition = (
  element: TRef,
  boundsRef: TRef,
  bounds: TBounds,
  x: number,
  y: number,
): [number, number] => {
  if (!boundsRef && !bounds) return [x, y];

  const boundsParams: IBoundsParams = typeof bounds !== "string" ? bounds : {};
  const parentNode = bounds === "parent" ? element.parentNode : null;
  const boundsNode = boundsRef || parentNode;

  const currentBound: IBoundsParams = boundsNode
    ? getBoundParams(element, boundsNode)
    : boundsParams;

  const { bottom, left, right, top } = currentBound;

  const validX = getValidCord(x, left, right);
  const validY = getValidCord(y, top, bottom);

  return [validX, validY];
};

export const getValidCord = (cord: number, min?: number, max?: number) => {
  if (typeof min === "number" && typeof max === "number")
    return Math.min(Math.max(cord, min), max);
  if (typeof min === "number") return Math.max(cord, min);
  if (typeof max === "number") return Math.min(cord, max);
  return cord;
};

export const getBoundParams = (
  node: HTMLElement,
  boundNode: ParentNode,
): IBoundsParams => {
  const { defaultView } = document;

  if (!(boundNode instanceof defaultView.HTMLElement)) {
    throw new Error("Bounds selector could not find an element.");
  }

  const nodeStyle = defaultView.getComputedStyle(node);
  const boundNodeStyle = defaultView.getComputedStyle(boundNode);

  const { clientHeight: nodeClientHeight, clientWidth: nodeClientWidth } = node;
  const {
    clientHeight: boundClientHeight,
    clientWidth: boundClientWidth,
  } = boundNode;

  const boundPaddingTop = toInt(boundNodeStyle.paddingTop);
  const boundPaddingRight = toInt(boundNodeStyle.paddingRight);
  const boundPaddingBottom = toInt(boundNodeStyle.paddingBottom);
  const boundPaddingLeft = toInt(boundNodeStyle.paddingLeft);

  const boundHeightTotal =
    boundClientHeight - boundPaddingTop - boundPaddingBottom;
  const boundWidthTotal =
    boundClientWidth - boundPaddingLeft - boundPaddingRight;

  const nodeBorderTop = toInt(nodeStyle.borderTopWidth);
  const nodeBorderRight = toInt(nodeStyle.borderRightWidth);
  const nodeBorderBottom = toInt(nodeStyle.borderBottomWidth);
  const nodeBorderLeft = toInt(nodeStyle.borderLeftWidth);
  const nodeMaringTop = toInt(nodeStyle.marginTop);
  const nodeMaringRight = toInt(nodeStyle.marginRight);
  const nodeMaringLeft = toInt(nodeStyle.marginLeft);
  const nodeMarginBottom = toInt(nodeStyle.marginBottom);

  const nodeHeightTotal = nodeClientHeight + nodeBorderTop + nodeBorderBottom;
  const nodeWidthTotal = nodeClientWidth + nodeBorderLeft + nodeBorderRight;

  const { offsetLeft, offsetTop } = node;

  return {
    bottom:
      boundHeightTotal -
      nodeHeightTotal -
      offsetTop +
      boundPaddingBottom -
      nodeMarginBottom,
    left: -offsetLeft + boundPaddingLeft + nodeMaringLeft,
    right:
      boundWidthTotal -
      nodeWidthTotal -
      offsetLeft +
      boundPaddingRight -
      nodeMaringRight,
    top: -offsetTop + boundPaddingTop + nodeMaringTop,
  };
};

export const toInt = (value: string): number => parseInt(value, 10);
