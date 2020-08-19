import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles, Grid } from '@material-ui/core';
import { Drink, doMagicAndMakeDrinkBeautiful } from '../../util/CocktailUtil';
import { RouteComponentProps, Redirect } from 'react-basic-routing';
import { useState } from 'react';
import LovelyLoader from '../../components/common/LovelyLoader';
import Page404 from '../Page404';

export interface ICocktailProps {
    drink?: Drink;
}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(3),
        },
        image: {
            maxWidth: "100%",
            height: "auto"
        },
        blocker: {
            minHeight: "2em"
        },
        ingredient: {
            borderBottom: "1px solid #dadada"
        }
    })
);

const Cocktail: React.FunctionComponent<ICocktailProps> = (props: ICocktailProps) => {
    const classes = styles();

    const IngredientList = () => {
        const pureList: JSX.Element[] = [];

        for (let i = 0; i < (props.drink?.ingredients ? props.drink.ingredients.length : 0); i++) {
            pureList.push(<Grid key={i + "ingredient"} className={classes.ingredient} item xs={10}>
                <Grid container>
                    <Grid item xs={10}><Typography variant="h6">{props.drink?.ingredients[i].name} </Typography> </Grid>
                    <Grid item xs={2}><Typography variant="body1">{props.drink?.ingredients[i].measure} </Typography> </Grid>
                </Grid>
            </Grid>)
        }

        return (<>
            <Grid container>
                {
                    pureList
                }
            </Grid>
        </>);
    }


    const DrinkBody = () => {
        return (<>
            <Grid container>
                <Grid item xs={8}>
                    <Grid container spacing={1} justify="center">
                        <Grid item xs={12}><Typography className={classes.title} variant="h3">{props.drink?.strDrink}</Typography></Grid>
                        <Grid item xs={12}><Typography variant="h6"><b>{props.drink?.strCategory} - {props.drink?.strAlcoholic}</b></Typography></Grid>
                        <Grid item xs={12} className={classes.blocker} />
                        <Grid item xs={2}><Typography variant="h5">Instructions</Typography></Grid>
                        <Grid item xs={10}><Typography variant="body1">{props.drink?.strInstructions}</Typography></Grid>
                        <Grid item xs={12} className={classes.blocker} />
                        <Grid item xs={2}><Typography variant="h5">Ingredients</Typography></Grid>
                        <Grid item xs={10}><IngredientList /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <img alt="" className={classes.image} src={props.drink?.strDrinkThumb}></img>
                </Grid>

            </Grid>
        </>);
    }


    return (
        <>{
            props.drink ?
                <>
                    <DrinkBody />
                </>
                : <LovelyLoader />
        }

        </>
    );
}






type TParams = { id: string }


export function RouteCocktail({ match }: RouteComponentProps<TParams>) {

    const [drink, setDrink] = useState<Drink>()
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false)
    if (match.params) {
        try {
            const id: number = +match.params.id;
            if (!loaded) {
                setLoaded(true);
                fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
                    .then(res => {
                        if (!res.ok) throw new Error(res.statusText);
                        return res.json();
                    })
                    .then(json => setDrink(doMagicAndMakeDrinkBeautiful(json.drinks[0])))
                    .catch(res=>setError(true));
            }

            if(error){
                return <Page404 />
            }
            return <Cocktail drink={drink} />


        } catch {
            return <Page404/>
        }
    } else {
        return <Page404/>
    }
}
