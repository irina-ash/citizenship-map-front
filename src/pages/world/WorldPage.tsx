import React, { useState, useCallback, useEffect } from "react";

import Drawer from "@mui/material/Drawer";
import Modal from '@mui/material/Modal';
import MapWorld from "components/MapWorld";
import UserList from "components/UserList";
import ProjectList from "components/ProjectList";
import MapContainer from "containers/MapContainer";
import UserCard from "components/UserCard";
import { IUser } from "entities/user/user.types";
import { useAppDispatch, useAppSelector } from "store";
import { mapSelector, setMapView } from "entities/map/map.slice";
import { IProject } from "entities/project/project.types";

const WorldPage = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [currentCountryId, setCurrentCountryId] = useState(null);

    const [currentUser, setCurrentUser] = useState(null);
    const [currentProject, setCurrentProject] = useState(null);

    const {view} = useAppSelector(mapSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setMapView("count"));
    }, []);
  
    const toggleDrawer = useCallback((country_id) => {
      setCurrentUser(null);
      setCurrentProject(null);
      setCurrentCountryId(drawerOpened ? null : country_id);
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
        <MapContainer title="WORLD">    
            <MapWorld onPinClick={toggleDrawer} onPinUserClick={setCurrentUser}/>
    
            <Drawer
            anchor="right"
            open={drawerOpened}
            onClose={toggleDrawer}
            >
                {view === "count" &&
                    <UserList countryId={currentCountryId} onItemClick={onSelectUser}/>
                }
                {view === "projects" &&
                    <ProjectList countryId={currentCountryId} onItemClick={onSelectProject} />
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

export default WorldPage;
