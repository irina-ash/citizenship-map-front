import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import {ReactComponent as Map} from "svg/russia.svg";
import styles from "./MapCountry.module.scss";
import { IMapCountryProps } from "./types";
import { computeDimensions } from "helpers/computeDimensions";
import { getCrtRegions, getCrtRegionsByProjects } from "entities/region/region.helpers";
import { userSelector } from "entities/user/user.slice";
import { useAppSelector } from "store";
import { getRegionUsers } from "entities/user/user.helpers";
import { randomIntFromInterval } from "helpers/randomIntFromInterval";
import { mapSelector } from "entities/map/map.slice";
import { drawPin } from "draw/drawPin";
import { projectSelector } from "entities/project/project.slice";

const MapCountry = ({onPinClick, onPinUserClick}: IMapCountryProps) => {
    const refMap = useRef();
    const {view} = useAppSelector(mapSelector);
    const {itemsFiltered: usersFiltered} = useAppSelector(userSelector);
    const {itemsFiltered: projectsFiltered} = useAppSelector(projectSelector);

    const resetMap = () => {
        const svg = d3.select("#svg_map");
        svg.selectAll(`path`).attr("class", null);
        svg.selectAll("g").remove();    
    };

    useEffect(() => {
        resetMap();
        if (refMap?.current) {
            const svg = d3.select("#svg_map");

            const crt_regions = view === "projects" ? getCrtRegionsByProjects(projectsFiltered) : getCrtRegions(usersFiltered);
            
            crt_regions.forEach(c => {
                const path = svg.select(`#${c.value}`);
                const dimensions = computeDimensions(path);

                if (path) {
                    path.attr("class", styles.crtRegion);
                    if (dimensions) {
                        const x_center = dimensions.x + dimensions.width/2;
                        const y_center = dimensions.y + dimensions.height/2;

                        if (view === "people") {
                            const region_users = getRegionUsers(c.id, usersFiltered);

                            region_users.forEach((user) => {
                                const offset_x = dimensions.width > 60 ? randomIntFromInterval(-20, 20) : randomIntFromInterval(-5, 5);
                                const offset_y = dimensions.height > 60 ? randomIntFromInterval(-20, 20) : randomIntFromInterval(-5, 5);
                                const translate = `translate(${x_center-20+offset_x},${y_center-40+offset_y})`;

                                const shortName = user?.person?.firstName?.charAt(0)?.toUpperCase() + user?.person?.lastName?.charAt(0)?.toUpperCase();
                                drawPin(svg, `group_${user.email}`, () => onPinUserClick(user), translate, shortName, 6);
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

export default MapCountry;