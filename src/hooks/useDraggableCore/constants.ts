import { TEventsSet } from "./types";

//Соответсвие имен Mouse и Touch событий
export const EVENTS_FOR: TEventsSet = {
  mouse: {
    move: "mousemove",
    start: "mousedown",
    stop: "mouseup",
  },
  touch: {
    move: "touchmove",
    start: "touchstart",
    stop: "touchend",
  },
};

//Стандартные опции для событий
export const EVENT_OPT = { capture: true };

//Идентификатор стилей для преотвращения user select
export const SELECT_STYLE_ID = "react-draggable-style-el";

//CSS класс, который будет навешан на body для предотвращени user select
export const SELECT_STYLE_CLASS_NAME = "react-draggable-transparent-selection";
