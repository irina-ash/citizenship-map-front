import { IUser } from "entities/user/user.types";
import { IRegion } from "./region.types";
import { getCrtCities, getCrtCitiesByProjects } from "entities/city/city.helpers";
import { regions } from "./region.constants";
import { IProject } from "entities/project/project.types";

export const getCrtRegions = (users: IUser[]): IRegion[] => {
    const crt_cities = getCrtCities(users);
    const crt_regions: IRegion[] = [];
    regions.forEach((value) => {
        if (!!crt_cities?.find(city => city.region_id === value.id)) {
            const user_count = crt_cities?.filter(c => c.region_id === value.id)?.reduce(function (acc, obj) { return acc + obj.user_count; }, 0);
            crt_regions.push({
                ...value,
                user_count,
            });
        }
    });
    return crt_regions;
};

export const getCrtRegionsByProjects = (projects: IProject[]): IRegion[] => {
    const crt_cities = getCrtCitiesByProjects(projects);
    const crt_regions: IRegion[] = [];
    regions.forEach((value) => {
        if (!!crt_cities?.find(city => city.region_id === value.id)) {
            const project_count = crt_cities?.filter(c => c.region_id === value.id)?.reduce(function (acc, obj) { return acc + obj.project_count; }, 0);
            crt_regions.push({
                ...value,
                project_count,
            });
        }
    });
    return crt_regions;
}