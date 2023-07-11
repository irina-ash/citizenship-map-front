import React, { useCallback, useState } from "react";
import styles from "./ToolsPanel.module.scss";
import { team_groups, default_team, units } from "./constants";
import { IToolsPanelProps } from "./types";
import ToolFilter from "./ToolFilter/ToolFilter";
import { useAppSelector } from "store";
import { profileSelector } from "entities/profile/profile.slice";
import { TWorkType } from "@entities/user/user.types";

import {ReactComponent as AvatarBlue} from "svg/avatars/avatar-blue.svg";
import {ReactComponent as AvatarGreen} from "svg/avatars/avatar-green.svg";
import {ReactComponent as AvatarOrange} from "svg/avatars/avatar-orange.svg";
import {ReactComponent as AvatarPink} from "svg/avatars/avatar-pink.svg";
import {ReactComponent as AvatarViolet} from "svg/avatars/avatar-violet.svg";
import {ReactComponent as AvatarBlueLight} from "svg/avatars/avatar-blue-light.svg";
import {ReactComponent as AvatarPeach} from "svg/avatars/avatar-peach.svg";
import { mapSelector } from "entities/map/map.slice";

const ToolsPanel = ({onFilterByTeam, onFilterByProject}: IToolsPanelProps) => {
    const [selectedType, setSelectedType] = useState(default_team?.id);
    const [selectedProject, setSelectedProject] = useState(null);

    const {me} = useAppSelector(profileSelector);
    const {view} = useAppSelector(mapSelector);

    const onPeopleTypeClick = useCallback((value) => {
        setSelectedProject(null);
        setSelectedType(value);
        onFilterByTeam(value);
    }, []);

    const onProjectClick = useCallback((value) => {
        setSelectedType(default_team?.id);
        setSelectedProject(value);
        onFilterByProject?.(value);
    }, []);

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
    
    return (
        <div className={styles.toolsPanel}>
            {view !== "projects" && <>
                <ToolFilter 
                    title="Подразделения" 
                    items={team_groups?.map(group => ({
                        ...group,
                        icon: getIconByType(group.id as TWorkType),
                    }))} 
                    selected={selectedType} 
                    onItemClick={onPeopleTypeClick} 
                />            
                <ToolFilter 
                    title="Мои команды" 
                    items={me.projects.map(p => ({
                        id: p["@id"],
                        name: p.title,
                    }))} 
                    selected={selectedProject} 
                    onItemClick={onProjectClick}
                />
            </>}
      </div>
    )
};

export default ToolsPanel;