import { createStyles, Theme, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useState } from 'react';

export interface IHomeProps {

}

interface Person {
    name: string;
    alter: number;
    beruf: string;
    schuhgröße: number;
    istVolljährig: boolean;
    hobbies: string[];
}



const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        },
        root: {
            padding: "0.5em",
            width: "80%",
            minHeight: "10em",
            margin: "auto"
        }
    })
);

const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
    const classes = styles();
    const [randomFact, setRandomFact] = useState<string>();
    const [factOfTheDay, setFactOfTheDay] = useState<string>();

    var text: string;

    var felix: Person;
    felix ={
        name: 'Felix',
        alter: 20,
        beruf: "Nerd",
        schuhgröße: 44,
        istVolljährig: true,
        hobbies: ["programmieren", "nerdytalk" ]
    }

    console.log(felix.hobbies[0]);

    felix.hobbies.forEach(hobbie=>{
        console.log(hobbie);
    })

    const [loaded, setLoaded] = useState(false);
    if (!loaded) {
        setLoaded(true);
        fetch('https://uselessfacts.jsph.pl/random.json?language=de')
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(res => setRandomFact(res.text))
            .catch(console.error);
        fetch('https://uselessfacts.jsph.pl/today.json?language=de')
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(res => setFactOfTheDay(res.text))
            .catch(console.error);
    }

    return (
        <>
            <Typography variant="h3" className={classes.title}>Home</Typography>
            <br />
            <br />
            <br />
            <Paper className={classes.root} elevation={2}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="h5">Random Fact</Typography>
                        <Typography variant="body1">{randomFact}</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5">Fact of the day</Typography>
                        <Typography variant="body1">{factOfTheDay}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Home;