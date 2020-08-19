import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles, Grid, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-basic-routing';
import CasinoIcon from '@material-ui/icons/Casino';
import SearchIcon from '@material-ui/icons/Search';
import CocktailRandom from './cocktail/CocktailRandom';
import CocktailSearch from './cocktail/CocktailSearch';

export interface ICocktailViewProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        },
        root: {
            width: "60%",
            margin: "auto",
            padding: "0.5em"
        },
        button: {
            width: "100%",
            textAlign: "center",
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.grey[900]
        },
        image: {
            maxWidth: "100%",
            height: "auto"
        },
    })
);

const CocktailPage: React.FunctionComponent<ICocktailViewProps> = (props: ICocktailViewProps) => {
    const classes = styles();

    return (
        <>

            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h3" className={classes.title}>Supa Fancy Cocktail Bar</Typography>
                    <br />
                    <Typography variant="body1">This fancy cocktail bar is for all out there who just want to cool down, drinkin' one of these pretty little cocktails and just RELAX!</Typography>
                    <Typography variant="caption">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(It's very important to relax)</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img className={classes.image} src="/img/cocktail_spruch.jpg"></img>
                </Grid>
            </Grid>

            <br />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <CocktailRandom></CocktailRandom>
                </Grid>
                <Grid item xs={9}>
                    <CocktailSearch></CocktailSearch>
                </Grid>
            </Grid>

            <br />

        </>
    );
}

export default CocktailPage;