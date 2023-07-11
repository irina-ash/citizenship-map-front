import React from "react";

import useDraggable from "hooks/useDraggable";

import { IUseDraggable } from "hooks/useDraggable/types";

import styles from "./Draggable.module.scss";

const Draggable: React.FC<IUseDraggable & { children?: React.ReactNode }> = ({
  children,
  ...draggable
}) => {
  const { ref, style } = useDraggable(draggable);

  return (
    <div className={styles.parent}>
      <div ref={ref} className={styles.draggable} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Draggable;
