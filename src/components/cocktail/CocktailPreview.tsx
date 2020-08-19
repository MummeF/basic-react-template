import { createStyles, Grid, Paper, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Drink } from '../../util/CocktailUtil';
import LovelyLoader from '../common/LovelyLoader';
import { NavLink } from 'react-basic-routing';

export interface ICocktailProps {
    drink?: Drink;
}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
            margin: "auto",
            minHeight: "10em",
            padding: "0.5em"
        },
        image: {
            maxWidth: "100%",
            height: "auto"
        },
        title: {
            marginBottom: theme.spacing(3),
        },
        body: {
            color: theme.palette.grey[900],
            textDecoration: "none",
        },
    })
);

const CocktailPreview: React.FunctionComponent<ICocktailProps> = (props: ICocktailProps) => {
    const classes = styles();

    const DrinkBody = () => {
        return (<>
            <Grid component={NavLink} className={classes.body}  to={"/cocktail/"+ props.drink?.idDrink} container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h5">{props.drink?.strDrink} ({props.drink?.strCategory} - {props.drink?.strAlcoholic})</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6"><b></b></Typography>
                </Grid>
                <Grid item xs={8}>
                    <img alt="" className={classes.image} src={props.drink?.strDrinkThumb}></img>
                </Grid>

            </Grid>
        </>);
    }

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                {
                    props.drink ? <DrinkBody /> : <LovelyLoader />
                }
            </Paper>
        </>
    );
}

export default CocktailPreview;