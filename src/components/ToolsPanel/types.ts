import { TWorkType } from "@entities/user/user.types";

export interface IToolsPanelProps {
    onFilterByTeam?: (value: TWorkType | null) => void;
    onFilterByProject?: (id: string) => void;
}