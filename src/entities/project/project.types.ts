import { IUnit } from "entities/unit/unit.types";
import { IContractor } from "entities/contractor/contractor.types";

export interface IProject {
    "@type": "Project";
    "@id"?: string;
    title: string;
    description?: string;
    contractor?: IContractor;
    stages?: any;
    currentStage?: any;
    archived?: boolean;
    isCommercial?: boolean;
    unit?: IUnit;
    city?: number;
}

export interface IProjectState {
    items: IProject[];
    itemsFiltered: IProject[];
}