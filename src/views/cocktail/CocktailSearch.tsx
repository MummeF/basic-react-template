import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles, Paper, TextField, InputAdornment, FormControl, InputLabel, Input, Grid } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { Drink, doMagicAndMakeDrinkBeautiful, DrinkJSON } from '../../util/CocktailUtil';
import CocktailPreview from '../../components/cocktail/CocktailPreview';

export interface ICocktailSearchProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        },
        root: {
            width: "80%",
            margin: "auto",
            padding: "0.5em",

            minHeight: "10em"
        },
        searchField: {
            width: "100%"
        }
    })
);

const CocktailSearch: React.FunctionComponent<ICocktailSearchProps> = (props: ICocktailSearchProps) => {
    const classes = styles();
    const [searchTerm, setSearchTerm] = useState("");

    const [firstLetterMatch, setFirstLetterMatch] = useState<Drink[]>([]);

    const [displayedMatch, setDisplayedMatch] = useState<Drink[]>([]);

    const searchTermChange = (newTerm: string) => {
        if (newTerm.length > 1 && searchTerm.length > 1 || (newTerm.charAt(0) == searchTerm.charAt(0))) {
            setSearchTerm(newTerm);
            //just refilter
            setDisplayedMatch(firstLetterMatch.filter(drink => drink.strDrink.toLowerCase().startsWith(newTerm.toLowerCase())));
        } else {
            setSearchTerm(newTerm);
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + newTerm.charAt(0))
                .then(res => {
                    if (!res.ok) throw new Error(res.statusText);
                    return res.json();
                })
                .then(res => {
                    const match = res.drinks.map((drink: DrinkJSON) => doMagicAndMakeDrinkBeautiful(drink));
                    setFirstLetterMatch(match);
                    setDisplayedMatch(match.filter((drink: Drink) => drink.strDrink.toLowerCase().startsWith(newTerm.toLowerCase())));
                })
                .catch(res => {
                    setFirstLetterMatch([]);
                    setDisplayedMatch([]);
                })

        }



    }

    return (
        <>
            <Paper className={classes.root} elevation={3}>
                <Grid container justify="center" alignItems="center">
                    <Grid item> <SearchIcon /></Grid>
                    <Grid item xs={11}>
                        <TextField className={classes.searchField} placeholder="Search by name..." value={searchTerm} onChange={e => searchTermChange(e.target.value)} />
                    </Grid>
                </Grid>
                <br />
                <Grid container direction="column">
                    {
                        displayedMatch.map(match => <Grid item xs={7}><CocktailPreview drink={match} /></Grid>)
                    }

                </Grid>

            </Paper>
        </>
    );
}

export default CocktailSearch;