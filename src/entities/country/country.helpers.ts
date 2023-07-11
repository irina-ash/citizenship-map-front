import { IUser } from "entities/user/user.types";
import { ICountry } from "./country.types";
import { getCrtCities, getCrtCitiesByProjects } from "entities/city/city.helpers";
import { countries_array } from "./country.constants";
import { IProject } from "entities/project/project.types";

export const getCrtCountries = (users: IUser[]): ICountry[] => {
    const crt_cities = getCrtCities(users);
    const crt_countries: ICountry[] = [];
    countries_array.forEach((value) => {
        if (!!crt_cities?.find(city => city.country_id === value.id)) {
            const user_count = crt_cities?.filter(c => c.country_id === value.id)?.reduce(function (acc, obj) { return acc + obj.user_count; }, 0);
            crt_countries.push({
                ...value,
                user_count,
            });
        }
    });
    return crt_countries;
}

export const getCrtCountriesByProjects = (projects: IProject[]): ICountry[] => {
    const crt_cities = getCrtCitiesByProjects(projects);
    const crt_countries: ICountry[] = [];
    countries_array.forEach((value) => {
        if (!!crt_cities?.find(city => city.country_id === value.id)) {
            const project_count = crt_cities?.filter(c => c.country_id === value.id)?.reduce(function (acc, obj) { return acc + obj.project_count; }, 0);
            crt_countries.push({
                ...value,
                project_count,
            });
        }
    });
    return crt_countries;
}