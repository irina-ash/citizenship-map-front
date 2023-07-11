import { TLoadingState } from "entities/common/common.types";
import { IProject } from "entities/project/project.types";

export interface IPerson {
    "@type": "Person";
    "@id": string;
    firstName: string;
    lastName: string;
    surname: string | null;
    gender: string | null;
    birthDate: string | null;
    jobTitle: string | null;
    city: number | null;
}

export interface IManager {
    "@type": "Manager";
    "@id": string;
    firstName: string | null;
    lastName: string | null;
    surname: string | null;
}

export interface IDeveloper {
    "@type": "Developer";
    "@id": string;
    firstName: string | null;
    lastName: string | null;
    surname: string | null;
    dateHiring: Date | string | null;
    dateDismissal: Date | string |null;
}

export interface IWorkPosition {
    "@id": string;
    "@type": "WorkPosition";
    datePosition: Date | string |null;
    jobTitle: string | null;
    contractType: string | null;
    normFullDay: number | null;
    normShortDay: number | null;
    datePositionEnd: Date | string |null;
    workingStatus: string | null;
}

export type TWorkType = "developer" | "analyst" | "designer" | "manager" | "hr" | "test";

export interface IUser {
    "@type": "User";
    "@id": string;
    email: string;
    contacts: any[];
    dateHiring: Date | string |null;
    dateDismissal: Date | string |null;
    person: IPerson;
    manager: IManager | null;
    developer: IDeveloper | null;
    projectsAsManager: IProject[];
    projectsAsDeveloper: IProject[];
    isAdmin: boolean;
    isManager: boolean;
    isMasterManager: boolean;
    isDeveloper: boolean;
    isHR: boolean;
    workPosition: IWorkPosition | null;
    workType?: TWorkType;
    workRoles?: TWorkType[];
}

export interface IUserCollection {
    "hydra:member": IUser[];
    "hydra:totalItems": number;
    "hydra:view": {
        "@id": string;
        "@type": string;
        "hydra:first": string | null;
        "hydra:last": string | null;
        "hydra:next": string | null;
    }
}

export interface IUserState {
    items: IUser[];
    itemsFiltered: IUser[];
    error: string | null;
    loading: TLoadingState;
}

export interface IUsersByYearsStatistic {
    year: number;
    count: number;
    percent?: number;
}

export interface IGetUsersParams {
    page?: number;
    pagination?: boolean;
}