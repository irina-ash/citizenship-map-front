export interface ICountry {
    id: number;
    value: string;
    title: string;
    name: string | null;
    user_count?: number;
    project_count?: number;
}