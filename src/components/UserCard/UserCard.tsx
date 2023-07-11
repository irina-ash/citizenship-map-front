import React from "react";
import cn from "classnames";
import { IUserCardProps } from "./types";
import styles from "./UserCard.module.scss";
import { peopleColors } from "entities/user/user.constants";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import UserAvatar from "components/UserAvatar";

import StarsGif from 'images/giphy-14.gif';
import { cities } from "entities/city/city.constants";
import { ICity } from "entities/city/city.types";
import { recomendation } from "constants/info";
import { workInfo } from "entities/grade/grade.constants";
import GradeImage from "components/GradeImage";
import { selectGradeState } from "entities/grade/grade.slice";
import { useAppSelector } from "store";
import { IGrade } from "entities/grade/grade.types";

const UserCard = ({user}: IUserCardProps) => {
    const { items: gradeItems } = useAppSelector(selectGradeState);
    const color = peopleColors[user?.workRoles[0] || "developer"];

    const city: ICity = cities.find(c => c.id === user?.person?.city);
    const fileName = `${user?.email?.split('@')?.[0]}.jpg`;
    const avatarAlt = `${user?.person?.firstName} ${user?.person?.lastName}`;
    
    return (
        <Box className={styles.box}>
            <div className={cn(styles.card, styles[`card--${color}`])}>
                <img alt="" className={styles.stars} src={StarsGif}/>
                <div className={styles.workPosition}>{user?.workPosition?.jobTitle}</div>
                <div className={styles.person}>
                    <UserAvatar className={styles.avatar} alt={avatarAlt} fileName={fileName} workType={user?.workRoles?.[0]}/>
                    <div className={styles.name}>{user.person.firstName}<br/>{user.person.lastName}</div>
                    <div className={styles.city}>город {city?.name} {city?.timezone}</div>
                </div>

                {recomendation[user?.email] && (
                    <div className={styles.recomendation}>
                        <div className={styles.arrow}/>
                        <span>...рекомендую посетить в моем городе</span>
                        {recomendation[user?.email]}
                    </div>
                )}

                {workInfo[user?.email] && (
                    <>
                        <Divider className={styles.devider}>{workInfo[user?.email]?.type}</Divider>
                        <div className={styles.achives}>
                            {gradeItems?.map((g: IGrade) => (
                                <GradeImage 
                                    className={workInfo[user?.email]?.grades?.includes(g.name) ? styles.active : null} 
                                    alt={g.name}
                                    fileName={`${workInfo[user?.email].type.toLowerCase()}-${g.name.toLowerCase()}.svg`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Box>
    )
}

export default UserCard;