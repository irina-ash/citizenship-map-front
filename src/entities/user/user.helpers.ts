import { cities } from "entities/city/city.constants";
import { IUser, IUsersByYearsStatistic } from "./user.types";

export const getYears = (items: IUser[]) => {
    try {
        const datesDismissal = items?.filter(item => !!item.dateDismissal)?.map(item => item.dateDismissal);
        const datesHiring = items?.filter(item => !!item.dateHiring)?.map(item => item.dateHiring);
        const allDates = [...datesDismissal, ...datesHiring]?.map(date => new Date(date)?.getFullYear());
        return allDates?.filter((value, index, array) => array.indexOf(value) === index)?.sort();
    } catch (e) {return [];}
}

export const getUsersByYears = (years: number[], items: IUser[]): IUsersByYearsStatistic[] => {
    const result: IUsersByYearsStatistic[] = [];

    years.forEach((y) => {
        const list = items.filter(item => item.dateHiring && y >= new Date(item.dateHiring)?.getFullYear() && (!item.dateDismissal || new Date(item.dateDismissal)?.getFullYear() <= y));
        result.push({
            year: y,
            count: list?.length,
        });
    });

    const values: number[] = result?.map(r => r.count || 0);
    const maxValue: number = Math.max(...values);

    return result.map(r => ({
        ...r,
        percent: (r.count * 100) / maxValue
    }));
};

export const getCountryUsers = (country_id: number, items: IUser[]): IUser[] => {
    const country_cities = cities.filter(c => c.country_id === country_id)?.map(c => c.id) || [];
    return items.filter(p => country_cities.includes(p.person.city)) || [];
}

export const getRegionUsers = (region_id: number, items: IUser[]): IUser[] => {
    const region_cities = cities.filter(c => c.region_id === region_id)?.map(c => c.id) || [];
    return items.filter(p => region_cities.includes(p.person.city)) || [];
}