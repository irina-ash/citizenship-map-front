import { TMapViewType } from "entities/map/map.types";

export interface ISettingsPanelProps {
    onViewChange: (value: TMapViewType) => void;
}