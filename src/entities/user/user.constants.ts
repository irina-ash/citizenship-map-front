import { people } from "constants/people.mock";
import { IUser, IUserState, TWorkType } from "./user.types";

export const page = 1;

export const initialUsers:IUser[] = people.filter(p => !p.dateDismissal).map(p => {
    const roles: TWorkType[] = [];
    if (p.workPosition?.jobTitle?.toLowerCase()?.includes("дизайнер")) roles.push("designer");
    if (p.workPosition?.jobTitle?.toLowerCase()?.includes("аналит")) roles.push("analyst");
    if (p.workPosition?.jobTitle?.toLowerCase()?.includes("тест")) roles.push("test");
    if (p.isHR) roles.push("hr");
    if (p.isDeveloper) roles.push("developer");
    if (p.isManager) roles.push("manager");
    return ({
        ...p,
        workRoles: roles,
    })
});

export const INITIAL_STATE: IUserState = {
    items: initialUsers,
    itemsFiltered: initialUsers,
    error: null,
    loading: 'idle',
};

export const peopleColors:{[K in TWorkType]: string} = {
    developer: "blue",
    analyst: "violet",
    designer: "green",
    manager: "pink",
    hr: "blue-light",
    test: "peach",
}
