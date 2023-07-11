import { IProject, IProjectState } from "./project.types";
import { projects } from "constants/projects.mock";

export const project_1: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_1",
    "title": "Проект 1"
};

export const project_2: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_2",
    "title": "Проект 2"
};

export const project_3: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_3",
    "title": "Проект 3"
};

export const project_4: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_4",
    "title": "Проект 4"
};

export const project_5: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_5",
    "title": "Проект 5"
};

export const project_6: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_6",
    "title": "Проект 6"
};

export const project_7: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_7",
    "title": "Проект 7"
};

export const project_8: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_8",
    "title": "Проект 8"
};

export const project_9: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_9",
    "title": "Проект 9"
};

export const project_10: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_10",
    "title": "Проект 10"
};

export const project_11: IProject = {
    "@type": "Project",
    "@id": "/api/projects/project_11",
    "title": "Проект 11"
};

export const INITIAL_STATE: IProjectState = {
    items: projects,
    itemsFiltered: projects,
};