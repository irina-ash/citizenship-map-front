import React, { useCallback, useState } from "react";
import styles from "./SettingsPanel.module.scss";

import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { items } from "./constants";
import { ISettingsPanelProps } from "./types";
import { TMapViewType } from "entities/map/map.types";

const SettingsPanel = ({onViewChange}: ISettingsPanelProps) => {

    return (
        <div className={styles.panel}>
            <Typography className={styles.caption} variant="h5" component="div" align="center">
                Вид карты
            </Typography>
            <RadioGroup
                defaultValue="count"
                name="radio-buttons-group"
                onChange={(event, value: string) => onViewChange(value as TMapViewType)}
            >
                {Object.keys(items).map((item, ind) => (
                    <FormControlLabel 
                        key={ind}
                        value={item}
                        control={<Radio size="small"/>} 
                        label={items[item]}
                    />
                ))}
            </RadioGroup>
        </div>
    )
}

export default SettingsPanel;