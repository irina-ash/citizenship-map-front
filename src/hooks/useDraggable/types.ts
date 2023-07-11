import { CSSProperties } from "react";

import {
  IUseDraggableCore,
  IUseDraggableCoreResult,
  TControlPosition,
  TRefCreator,
} from "../useDraggableCore/types";

export interface IUseDraggable extends IUseDraggableCore {
  axis?: TAxis;
  position?: TControlPosition;
  defaultPosition?: TControlPosition;
  positionOffset?: TOffsetControlPosition;
  bounds?: TBounds;
}

export interface IUseDraggableShare {
  dragged: boolean;
}

export interface IUseDraggableState extends IUseDraggableShare {
  x: number;
  y: number;
  slackX: number;
  slackY: number;
}

export interface IUseDraggableResult
  extends IUseDraggableCoreResult,
    IUseDraggableShare {
  style: CSSProperties;
  bounds: TRefCreator;
}

export type TOffsetControlPosition = {
  x: number | string;
  y: number | string;
};

export type TAxis = "both" | "x" | "y" | "none";

export interface IBoundsParams {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}
export type TBounds = IBoundsParams | "parent";
