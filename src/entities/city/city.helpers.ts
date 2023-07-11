import { IUser } from "entities/user/user.types";
import { cities } from "./city.constants";
import { ICity } from "./city.types";
import { IProject } from "entities/project/project.types";

export const getCrtCities = (users: IUser[]): ICity[] => {
    const user_city_ids = users?.filter(u => !!u.person?.city)?.map(u => u.person.city);
    const filtered_cities = cities.filter(c => user_city_ids?.includes(c.id)) || [];

    return filtered_cities.map(c => ({
        ...c,
        user_count: users?.filter(u => u.person.city === c.id)?.length || 0,
    }));
};

export const getCrtCitiesByProjects = (projects: IProject[]): ICity[] => {
    const project_city_ids = projects?.filter(p => !!p.city)?.map(p => p.city);
    const filtered_cities = cities.filter(c => project_city_ids?.includes(c.id)) || [];

    return filtered_cities.map(c => ({
        ...c,
        project_count: projects?.filter(u => u.city === c.id)?.length || 0,
    }));
};
