import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

import { IUserListProps } from './types';
import { cities } from 'entities/city/city.constants';
import { countries_array } from 'entities/country/country.constants';
import { regions } from 'entities/region/region.constants';
import { ICountry } from 'entities/country/country.types';
import { IRegion } from 'entities/region/region.types';

import styles from "./UserList.module.scss";
import { useAppSelector } from 'store';
import { userSelector } from 'entities/user/user.slice';
import { IUser } from 'entities/user/user.types';
import UserAvatar from 'components/UserAvatar';

const UserList = ({ countryId, regionId, onItemClick }: IUserListProps) => {
    const [country, setCountry] = useState<ICountry>(null);
    const [region, setRegion] = useState<IRegion>(null);
    const [users, setUsers] = useState<IUser[]>([]);

    const {itemsFiltered} = useAppSelector(userSelector);

    useEffect(() => {
        if (countryId) {
            const country_cities = cities.filter(c => c.country_id === countryId)?.map(c => c.id) || [];
            const people_filtered = itemsFiltered.filter(p => country_cities.includes(p.person.city));
            setCountry(countries_array.find(c => c.id === countryId));
            setUsers(people_filtered);
        } else if (regionId) {
            const region_cities = cities.filter(c => c.region_id === regionId)?.map(c => c.id) || [];
            const people_filtered = itemsFiltered.filter(p => region_cities.includes(p.person.city));
            setRegion(regions.find(c => c.id === regionId));
            setUsers(people_filtered);
        }
    }, [countryId, regionId]);

    return (
        <List className={styles.list}
              subheader={<Typography className={styles.title} variant="h5" component="h5" align="center">
                            {country?.name || region?.title || ""}
                        </Typography>}>
            {users?.map((user, ind) => {
                const city = cities?.find(c => c.id === user?.person?.city);
                const fileName = `${user?.email?.split('@')?.[0]}.jpg`;
                const avatarAlt = `${user?.person?.firstName} ${user?.person?.lastName}`;
                return (
                <div key={ind}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar onClick={() => onItemClick(user)}>
                            <UserAvatar alt={avatarAlt} fileName={fileName} workType={user?.workRoles?.[0]}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <div className={styles.name} onClick={() => onItemClick(user)}>
                                        {user?.person?.firstName} {user?.person?.lastName}
                                    </div>
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                <Typography
                                    component="div"
                                    variant="body2"
                                    color="CaptionText"
                                >
                                    {user?.workPosition?.jobTitle || ''}
                                </Typography>
                                <Typography
                                    component="a"
                                    color="mediumblue"
                                >
                                    {user?.email}
                                </Typography>
                                <Typography
                                    component="div"
                                    variant="body2"
                                    color="GrayText"
                                >
                                    {city?.name || ''} {city?.timezone || ''}
                                </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            )})}
        </List>
    )
}

export default UserList;