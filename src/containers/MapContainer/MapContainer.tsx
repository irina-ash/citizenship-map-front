import React, { useCallback, useRef } from "react";
import {IMapContainerProps} from "./types";
import styles from "./MapContainer.module.scss";

import ToolsPanel from "components/ToolsPanel";
import ZoomSlider from "components/ZoomSlider";
import Header from "components/Header/Header";
import SettingsPanel from "components/SettingsPanel/SettingsPanel";

import { TWorkType } from "entities/user/user.types";
import { filterUsersByProject, filterUsersByTeam, filterUsersByUnit, resetUsers } from "entities/user/user.slice";
import { useAppDispatch } from "store";
import { TMapViewType } from "entities/map/map.types";
import { setMapView } from "entities/map/map.slice";
import { filterProjectsByUnit, resetProjects } from "entities/project/project.slice";
import Draggable from "components/Draggable/Draggable";

const MapContainer = ({children, title}: IMapContainerProps) => {
    const mapContainerRef = useRef<HTMLDivElement>();
    const dispatch = useAppDispatch();

    const handleSetViewType = useCallback((value: TMapViewType) => {
      dispatch(setMapView(value));
    }, []);
    
    const handleSetZoom = useCallback((zoom: number) => {
      if (mapContainerRef?.current) {

        const childs = Array.from(mapContainerRef.current.children);
        childs[0]?.setAttribute("style", "transform: " + "scale(" + zoom/100 + ")");
      }
    }, []);

    const handleFilterByTeam = useCallback((value: TWorkType | null) => {
      if (!value) {
        dispatch(resetUsers());
      } else {
        dispatch(filterUsersByTeam(value));
      }
    }, []);

    const handleFilterByProject = useCallback((id: string | null) => {
      if (!id) {
        dispatch(resetUsers());
      } else {
        dispatch(setMapView("people"));
        dispatch(filterUsersByProject(id));
      }
    }, []);

    return (
      <>
        <Header title={title}/>
        <div className={styles.toolsWrapper}>
          <div className={styles.tools}>
            <SettingsPanel onViewChange={handleSetViewType}/>
            <ToolsPanel 
              onFilterByTeam={handleFilterByTeam} 
              onFilterByProject={handleFilterByProject}
            />
          </div>
          <ZoomSlider className={styles.zoom} onZoomChanged={handleSetZoom} />
        </div>
        <div className={styles.container} ref={mapContainerRef} >
            <Draggable>
              {children}
            </Draggable>
        </div>
      </>
    )
}

export default MapContainer;