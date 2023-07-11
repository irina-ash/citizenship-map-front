import { ReactNode } from "react";

export interface IToolFilterItem {
    id: string | null;
    name: string;
    icon?: ReactNode;
}

export interface IToolFilterProps {
    title: string;
    onItemClick?: (id: string) => void;
    items?: IToolFilterItem[];
    selected?: string | null;
}