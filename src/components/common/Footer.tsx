import { Button, Grid, makeStyles, useTheme } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer() {
    const theme = useTheme();

    const useStyles = makeStyles({
        root: {
            position: "fixed",
            backgroundColor: theme.palette.grey[400],
            bottom: 0,
            paddingRight: "10em",
            width: "100%",
            color: theme.palette.grey[600],
        },
        footer: {
            textAlign: "center",
        },
        footerText:{
            textAlign: "right",
            paddingRight: "1em",
        }
    });

    const classes = useStyles();

    return <React.Fragment>
        <div className={classes.root}>
            <Grid container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={3}
            >
                <Grid item xs className={classes.footer}>
                    <Button color="secondary" variant="text" startIcon={<HomeIcon />} component={NavLink} to="/">Home</Button>
                </Grid>
                <Grid item xs className={classes.footer}>
                    <Button color="secondary" variant="text" startIcon={<InfoIcon />} component={NavLink} to="/about">Über uns</Button>
                </Grid>
            </Grid>
        </div>
    </React.Fragment>
}