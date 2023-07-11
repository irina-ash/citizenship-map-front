import { IUser } from "entities/user/user.types";

export interface IUserListProps {
    countryId?: number;
    regionId?: number;
    onItemClick?: (user: IUser) => void;
}