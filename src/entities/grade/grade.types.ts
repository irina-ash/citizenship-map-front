import { TLoadingState } from "@entities/common/common.types";

export type TDeveloperWorkType = "Mobile" 
    | "Frontend" 
    | "Testing" 
    | "UX/UI" 
    | "Backend";

export type TDeveloperWorkStack = "NodeJS" 
    | "ReactJS" 
    | "VueJS" 
    | "Django" 
    | "ReduxToolkit" 
    | "CSS" 
    | "HTML" 
    | "TypeScript" 
    | "JavaScript" 
    | "PHP" 
    | "Python" 
    | "Symfony" 
    | "Laravel" 
    | "PostgreSQL" 
    | "CI/CD" 
    | "Git";

export interface IDeveloperWorkInfo {
    type?: TDeveloperWorkType;
    grades?: string[];
    stack?: TDeveloperWorkStack[];
}

export interface IGrade {
    id: number;
    name: string;
}

export interface IGradeState {
    error: string | null;
    loading: TLoadingState;
    items: IGrade[];
}