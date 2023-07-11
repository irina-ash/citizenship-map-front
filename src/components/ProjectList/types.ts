import { IProject } from "entities/project/project.types";

export interface IProjectListProps {
    countryId?: number;
    regionId?: number;
    onItemClick?: (user: IProject) => void;
}