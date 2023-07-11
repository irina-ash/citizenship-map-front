import { TLoadingState } from "entities/common/common.types";

export interface IStack {
    id: number;
    name: string;
}

export interface IStackState {
    error: string | null;
    loading: TLoadingState;
    items: IStack[];
}