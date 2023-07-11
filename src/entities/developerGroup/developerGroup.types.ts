import { TLoadingState } from "entities/common/common.types";

export interface IDeveloperGroup {
    id: number;
    name: string;
}

export interface IDeveloperGroupState {
    error: string | null;
    loading: TLoadingState;
    items: IDeveloperGroup[];
}