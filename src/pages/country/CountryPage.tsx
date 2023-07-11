import React, { useState, useCallback, useEffect } from "react";
import {useParams} from 'react-router-dom';

import Drawer from "@mui/material/Drawer";
import Modal from '@mui/material/Modal';
import MapCountry from "components/MapCountry";
import UserList from "components/UserList";
import ProjectList from "components/ProjectList";
import MapContainer from "containers/MapContainer";
import UserCard from "components/UserCard";
import { useAppDispatch, useAppSelector } from "store";
import { mapSelector, setMapView } from "entities/map/map.slice";
import { IUser } from "entities/user/user.types";
import { IProject } from "entities/project/project.types";

const CountryPage = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [currentRegionId, setCurrentRegionId] = useState(null);

    const [currentUser, setCurrentUser] = useState(null);
    const [currentProject, setCurrentProject] = useState(null);

    const {view} = useAppSelector(mapSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setMapView("count"));
    }, []);
  
    const toggleDrawer = useCallback((region_id) => {
        setCurrentUser(null);
        setCurrentProject(null);
        setCurrentRegionId(drawerOpened ? null : region_id);
        setDrawerOpened((oldValue) => !oldValue)
    }, []);

    const onSelectUser = useCallback((user: IUser) => {
        setCurrentUser(user);
        setCurrentProject(null);
    }, [currentUser, currentProject]);

    const onSelectProject = useCallback((p: IProject) => {
        setCurrentUser(null);
        setCurrentProject(p);
    }, [currentUser, currentProject]);
    
    return (
        <MapContainer title="RUSSIA">    
            <MapCountry onPinClick={toggleDrawer} onPinUserClick={setCurrentUser}/>
    
            <Drawer
                anchor="right"
                open={drawerOpened}
                onClose={toggleDrawer}
            >
                {view === "count" &&
                    <UserList regionId={currentRegionId} onItemClick={onSelectUser}/>
                }
                {view === "projects" &&
                    <ProjectList regionId={currentRegionId} onItemClick={onSelectProject} />
                }
            </Drawer>

            {currentUser?.["@id"] &&
                <Modal open={true} onClose={() => setCurrentUser(null)}>
                    <UserCard user={currentUser}/>
                </Modal>
            }
        </MapContainer>
    )
}

export default CountryPage;
