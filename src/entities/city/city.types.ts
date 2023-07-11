export interface ICity {
    id: number;
    value: string;
    title: string;
    name: string | null;
    country_id: number;
    region_id?: number;
    user_count?: number;
    project_count?: number;
    timezone?: string;
}