import { TWorkType } from "entities/user/user.types";

export interface IUserAvatarProps {
    className?: string;
    workType?: TWorkType;
    fileName?: string;
    alt: string; 
}