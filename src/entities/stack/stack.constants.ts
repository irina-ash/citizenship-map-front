import { IStackState } from "./stack.types";

export const INITIAL_STATE:IStackState = {
        error: null,
        items: [],
        loading: "idle",
}