import { IProject } from "entities/project/project.types";

export interface IProfileMe {
        id: number;
        name: string;
        email: string;
        createdAt: string | Date | null;
        updatedAt: string | Date | null;
        roles: any[];
        description: string | null;
        position: string | null;
        grade: string | null;
        projects?: IProject[];
}

export interface IProfileState {
        me: IProfileMe;
}