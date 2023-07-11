import React from "react";
import Typography from "@mui/material/Typography";
import PublicIcon from '@mui/icons-material/Public';

import styles from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.logo} onClick={() => navigate(routes.WORLD)}>
                <PublicIcon />
                <Typography variant="h1" component="div" align="left">
                    crt.geo
                </Typography>
            </div>
        </div>
    )
}

export default HomePage;