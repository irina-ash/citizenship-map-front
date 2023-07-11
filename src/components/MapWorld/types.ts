import { IUser } from "entities/user/user.types";

export interface IMapWorldProps {
    onPinClick?: (country_id: number) => void;
    onPinUserClick?: (user: IUser) => void;
}