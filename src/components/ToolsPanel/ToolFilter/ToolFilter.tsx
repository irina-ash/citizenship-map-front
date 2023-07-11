import React from "react";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

import { IToolFilterProps } from "./types";
import styles from "./ToolFilter.module.scss";

const ToolFilter = ({title, onItemClick, items, selected}: IToolFilterProps) => {
    return (
        <div className={styles.filter}>            
            <Typography className={styles.caption} variant="h5" component="div" align="center">
                {title}
            </Typography>
            {items.map((item, index) => (
            <Chip 
                className={styles.chip}
                key={index} 
                avatar={item.icon ? <Avatar>{item.icon}</Avatar> : null}
                color={item.id === selected ? "warning" : "default"} 
                label={item.name} 
                onClick={() => onItemClick(item.id)} />
            ))}
        </div>
    )
}

export default ToolFilter;