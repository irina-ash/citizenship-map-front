import { getUsersByYears, getYears } from "entities/user/user.helpers";
import { userSelector } from "entities/user/user.slice";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store";
import styles from "./Statistic.module.scss";
import { IUsersByYearsStatistic } from "@entities/user/user.types";

const Statistic = () => {
    const [stat, setStat] = useState<IUsersByYearsStatistic[]>([]);
    const {items} = useAppSelector(userSelector);

    useEffect(() => {
        if (items?.length) {
            const years = getYears(items);
            setStat(getUsersByYears(years, items));
        }
    }, [items]);

    return (
        <div className={styles.panelContainer}>
            <div className={styles.panel}>
                {stat.map(s => (
                        <div className={styles.timelineItem}>
                            <div style={{height: s.percent > 0 ? `${s.percent + 20}px` : '0px'}} className={styles.barItem}>
                                {s.count}
                            </div>
                            {s.year}
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Statistic;