import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./ZoomSlider.module.scss";
import { IZoomSliderProps } from "./types";

import Slider from '@mui/material/Slider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ZoomSlider = ({className, onZoomChanged}: IZoomSliderProps) => {
    const [zoomValue, setZoomValue] = useState(100);

    useEffect(() => {
        onZoomChanged(zoomValue);
      }, [zoomValue])
      
    const zoomInClick = useCallback(() => {
        setZoomValue(oldValue => oldValue < 200 ? oldValue + 10 : oldValue);
      }, [zoomValue]);
  
      const zoomOutClick = useCallback(() => {
        setZoomValue(oldValue => oldValue > 50 ? oldValue - 10 : oldValue);
      }, [zoomValue]);

    return (
        <div className={cn(className, styles.sliderContainer)}>
            <AddCircleOutlineIcon 
              className={styles.controls} 
              onClick={zoomInClick} 
              fontSize="large" 
              color="disabled"
            />
            <Slider
              defaultValue={100}
              value={zoomValue}
              orientation="vertical"
              valueLabelDisplay="auto"
              color="primary"
              step={10}
              marks
              min={50}
              max={200}
              onChange={(e, value: number) => setZoomValue(value)}
            />
            <RemoveCircleOutlineIcon
              className={styles.controls} 
              onClick={zoomOutClick} 
              fontSize="large" 
              color="disabled"
            />
        </div>
    )
}

export default ZoomSlider;