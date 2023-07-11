import { memo } from "react";
import useImage from 'hooks/useImage'
import { Avatar } from "@mui/material";
import { IUserAvatarProps } from "./types";
import { TWorkType } from "entities/user/user.types";

import {ReactComponent as AvatarBlue} from "svg/avatars/avatar-blue.svg";
import {ReactComponent as AvatarGreen} from "svg/avatars/avatar-green.svg";
import {ReactComponent as AvatarOrange} from "svg/avatars/avatar-orange.svg";
import {ReactComponent as AvatarPink} from "svg/avatars/avatar-pink.svg";
import {ReactComponent as AvatarViolet} from "svg/avatars/avatar-violet.svg";
import {ReactComponent as AvatarPeach} from "svg/avatars/avatar-peach.svg";
import {ReactComponent as AvatarBlueLight} from "svg/avatars/avatar-blue-light.svg";

const UserAvatar = ({ className, fileName, alt, workType }: IUserAvatarProps) => {
    const { error, image } = useImage(fileName);

    const getIconByType = (type: TWorkType) => {
        switch (type) {
            case "analyst": return <AvatarViolet />;
            case "designer": return <AvatarGreen />;
            case "manager": return <AvatarPink />;
            case "hr": return <AvatarBlueLight />;
            case "developer": return <AvatarBlue />;
            case "test": return <AvatarPeach />;
            default: return <AvatarOrange />;
        }
    }

    return (image && !error) 
    ? <Avatar className={className} src={image} alt={alt} /> 
    : <Avatar className={className} alt={alt}>{getIconByType(workType)}</Avatar>;
}

export default memo(UserAvatar);