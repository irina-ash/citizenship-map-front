import { MouseEvent, TouchEvent } from "react";

export type TMouseTouchEvent = MouseEvent | TouchEvent | Event;

export type TEventHandler<T = TMouseTouchEvent> = (e: T) => void;
export type TDragStart = (e: TMouseTouchEvent, eventFor: TEventFor) => void;

export interface IUseDraggableCore {
  /**
   * Если выставить в true, перетаскивать элемент можно будет любой кнопкой мыши
   */
  allowAnyClick?: boolean;
  /**
   * Свой собстенный offsetParent. Если не задано, возьмется offsetParent по умолчанию или body
   */
  offsetParent?: HTMLElement;
  disabled?: boolean;
  /**
   * Функция, которая вызовется при старте перетаскивания. Если она вернет false, компонент не изменит своего состояния
   */
  onStart?: TDraggableEventHandler;
  /**
   * Функция, которая вызовется при перетаскивании. Если она вернет false, компонент не изменит своего состояния
   */
  onDrag?: TDraggableEventHandler;
  /**
   * Функция, которая вызовется при окончании перетаскивания. Если она вернет false, компонент не изменит своего состояния
   */
  onStop?: TDraggableEventHandler;
  /**
   * По умолчанию, хук будет вешать стиль на весь документ, предотвращающий выделение текста пользователем. Если это вызывает проблемы, отключите эту функцию передав true
   */
  enableUserSelect?: boolean;
  grid?: TGrid;
  /**
   * Задать debounce в ms
   */
  debounce?: number;
}

export interface IUseDraggableCoreResult extends IUseDraggableShare {
  /**
   * Нужно передать элементу, который станет перетаскиваемым
   */
  ref: TRefCreator;
  /**
   * Элемент, который будет инициализировать перетаскивание. Если не задан, инициализация произойдет на самом элементе
   */
  handle: TRefCreator;
  /**
   * Элемент, который будет игнорировать перетаскивание
   */
  cancel: TRefCreator;
}

export interface IUseDraggableCoreState
  extends IUseDraggableShare,
    ILastCoords {
  eventFor: TEventFor;
  touchIdentifier: TTouchIdentifier;
}

export interface IUseDraggableShare {
  dragging: boolean;
}

export type TTouchIdentifier = number | null;

export type TRef = HTMLElement | null;
export type TRefCreator = (ref: TRef) => void;

export type TEventFor = "mouse" | "touch";
export type TEventForSet = {
  move: string;
  start: string;
  stop: string;
};
export type TEventsSet = {
  [key in TEventFor]: TEventForSet;
};

export type TControlPosition = { x: number; y: number } | null;
export type TOffset = { clientX: number; clientY: number } | null;

export interface ICoords {
  x: TCord;
  y: TCord;
}

export interface ILastCoords {
  lastX: TCord;
  lastY: TCord;
}

export interface IDeltaCoords {
  deltaX: TCord;
  deltaY: TCord;
}

export type TCord = number | null;

export interface IDraggableData extends ICoords, IDeltaCoords, ILastCoords {
  node: HTMLElement;
}

export type TDraggableEventHandler = (
  e: TMouseTouchEvent,
  data: IDraggableData,
) => void | false;

export type TGrid = [number, number];
