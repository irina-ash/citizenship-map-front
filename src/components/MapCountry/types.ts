import { IUser } from "@entities/user/user.types";

export interface IMapCountryProps {
    onPinClick?: (region_id: number) => void;
    onPinUserClick?: (user: IUser) => void;
}