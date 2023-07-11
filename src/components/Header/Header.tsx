import React from "react";
import Typography from "@mui/material/Typography";
import PublicIcon from '@mui/icons-material/Public';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { IHeaderProps } from "./types";
import styles from "./Header.module.scss";
import { routes } from "router/routes";
import { Button } from "@mui/material";

const Header = ({title}: IHeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <Button size="small" href={routes.WORLD}>
                    <PublicIcon />
                    <Typography variant="h6" component="div" align="left">
                        crt.geo
                    </Typography>
                </Button>
            </div>
            {title &&
            <Typography variant="h3" component="h3" align="center">
                {title}
            </Typography>
            }
            <div className={styles.profile}>                
                <Typography variant="h6" component="div" align="left">
                    shi@somedomain.com
                </Typography>
                <PermIdentityIcon />
            </div>
        </div>
    )
}

export default Header;