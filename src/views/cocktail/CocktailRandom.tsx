import { createStyles, Fab, Grid, Theme, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useState } from 'react';
import CocktailPreview from '../../components/cocktail/CocktailPreview';
import { doMagicAndMakeDrinkBeautiful, Drink, DrinkJSON } from '../../util/CocktailUtil';

export interface ICocktailRandomProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        },
        btn: {
            textAlign: "right"
        }
    })
);

const CocktailRandom: React.FunctionComponent<ICocktailRandomProps> = (props: ICocktailRandomProps) => {
    const classes = styles();

    const [cocktail, setCocktail] = useState<Drink>();
    const [started, setStarted] = useState(false);

    const fetchRandomCocktail = () => {
        setStarted(true);
        setCocktail(undefined);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(json => {
                json.drinks.forEach((drink: DrinkJSON) => setCocktail(doMagicAndMakeDrinkBeautiful(drink)));
            })
            .catch(console.error)
    }
    if (!started) {
        fetchRandomCocktail();
    }

    return (
        <>
            <Grid container>
                <Grid item xs={9}>
                    <CocktailPreview drink={cocktail}></CocktailPreview>
                </Grid>
                <Grid item xs={3} className={classes.btn}>
                    <Fab color="primary" onClick={fetchRandomCocktail}><RefreshIcon></RefreshIcon></Fab>
                </Grid>
            </Grid>
            <br />


        </>
    );
}

export default CocktailRandom;