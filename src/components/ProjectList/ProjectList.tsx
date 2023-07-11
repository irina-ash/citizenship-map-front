import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { IProjectListProps } from './types';
import { cities } from 'entities/city/city.constants';
import { countries_array } from 'entities/country/country.constants';
import { regions } from 'entities/region/region.constants';
import { ICountry } from 'entities/country/country.types';
import { IRegion } from 'entities/region/region.types';

import styles from "./ProjectsList.module.scss";
import { useAppSelector } from 'store';
import { IProject } from 'entities/project/project.types';
import { projectSelector } from 'entities/project/project.slice';

const ProjectList = ({ countryId, regionId, onItemClick }: IProjectListProps) => {
    const [country, setCountry] = useState<ICountry>(null);
    const [region, setRegion] = useState<IRegion>(null);
    const [list, setList] = useState<IProject[]>([]);

    const {itemsFiltered} = useAppSelector(projectSelector);

    useEffect(() => {
        if (countryId) {
            const country_cities = cities.filter(c => c.country_id === countryId)?.map(c => c.id) || [];
            const projects_filtered = itemsFiltered.filter(p => country_cities.includes(p.city));
            setCountry(countries_array.find(c => c.id === countryId));
            setList(projects_filtered);
        } else if (regionId) {
            const region_cities = cities.filter(c => c.region_id === regionId)?.map(c => c.id) || [];
            const projects_filtered = itemsFiltered.filter(p => region_cities.includes(p.city));
            setRegion(regions.find(c => c.id === regionId));
            setList(projects_filtered);
        }
    }, [countryId, regionId]);

    return (
        <List className={styles.list}
              subheader={<Typography className={styles.title} variant="h5" component="h5" align="center">
                            {country?.name || region?.title || ""}
                        </Typography>}>
            {list?.map((project, ind) => {
                const city = cities?.find(c => c.id === project?.city);
                return (
                <>
                    <ListItem key={ind} alignItems="flex-start">
                        <ListItemText
                            primary={
                                <div className={styles.name} onClick={() => onItemClick(project)}>
                                    {project?.title}
                                </div>
                            }
                            secondary={
                                <React.Fragment>
                                <Typography
                                    component="div"
                                    variant="body2"
                                    color="CaptionText"
                                >
                                    {project?.description || ""}
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
                </>
            )})}
        </List>
    )
}

export default ProjectList;