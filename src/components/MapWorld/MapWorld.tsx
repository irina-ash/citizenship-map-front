import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as d3 from "d3";
import {ReactComponent as Map} from "svg/world.svg";
import styles from "./MapWorld.module.scss";
import { getCrtCountries, getCrtCountriesByProjects } from "entities/country/country.helpers";
import { IMapWorldProps } from "./types";
import { computeDimensions } from "helpers/computeDimensions";
import { resetUsers, userSelector } from "entities/user/user.slice";
import { useAppDispatch, useAppSelector } from "store";
import { getCountryUsers } from "entities/user/user.helpers";
import { randomIntFromInterval } from "helpers/randomIntFromInterval";
import { mapSelector } from "entities/map/map.slice";
import { drawPin } from "draw/drawPin";
import { drawPoint } from "draw/drawPoint";
import { peopleColors } from "entities/user/user.constants";
import { projectSelector } from "entities/project/project.slice";

const MapWorld = ({onPinClick, onPinUserClick}: IMapWorldProps) => {
    const refMap = useRef();
    const navigate = useNavigate();
    const {view} = useAppSelector(mapSelector);
    const {itemsFiltered: usersFiltered} = useAppSelector(userSelector);
    const {itemsFiltered: projectsFiltered} = useAppSelector(projectSelector);
    
    const dispatch = useAppDispatch();

    const onCountryClick = useCallback((value) => {
        if (value === "RU") {
            dispatch(resetUsers());
            navigate("/russia");
        }
    }, []);

    const resetMap = () => {
        const svg = d3.select("#svg_map");
        svg.selectAll(`path`).attr("class", null);
        svg.selectAll("g").remove();    
    };

    useEffect(() => {
        resetMap();
        if (refMap?.current) {
            const svg = d3.select("#svg_map");
            const crt_countries = view === "projects" ? getCrtCountriesByProjects(projectsFiltered) : getCrtCountries(usersFiltered);
            
            crt_countries.forEach(c => {
                const path = svg.select(`#${c.value}`).on("click", () => onCountryClick(c.value));
                const dimensions = computeDimensions(path);

                if (path) {
                    path.attr("class", styles.crtCountry);
                    if (dimensions) {
                        const x_center = dimensions.x + dimensions.width/2;
                        const y_center = dimensions.y + dimensions.height/2;

                        if (view === "people") {
                            const country_users = getCountryUsers(c.id, usersFiltered);

                            country_users.forEach((user) => {
                                const offset_x = dimensions.width > 150 ? randomIntFromInterval(-100, 100) : 0;
                                const offset_y = dimensions.height > 100 ? randomIntFromInterval(-20, 80) : 0;
                                const translate = `translate(${x_center-20+offset_x},${y_center-40+offset_y})`;
                                if (view === "people") {
                                    const shortName = user?.person?.firstName?.charAt(0)?.toUpperCase() + user?.person?.lastName?.charAt(0)?.toUpperCase();
                                    drawPin(svg, `group_${user.email}`, () => onPinUserClick(user), translate, shortName, 6);
                                } else {
                                    drawPoint(svg, peopleColors[user.workType || "developer"], translate);
                                }
                            });
                        } else if (view === "count" || view === "projects") {
                            const translate = `translate(${x_center-20},${y_center-40})`;
                            const count = view === "projects" ? c.project_count : c.user_count;
                            drawPin(svg, `group_${c.value}`, () => onPinClick(c.id), translate, count, count > 9 ? 8 : 14);
                        }
                    }
                }
            });
        }
    }, [refMap, usersFiltered, projectsFiltered, view]);   

    return (
        <div className={styles.container}>
            <Map className={styles.map} ref={refMap}/>
        </div>
    )
}

export default MapWorld;