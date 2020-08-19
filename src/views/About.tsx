import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles } from '@material-ui/core';

export interface IAboutProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        }
    })
);

const About: React.FunctionComponent<IAboutProps> = (props: IAboutProps) => {
    const classes = styles();

    return (
        <>
            <Typography variant="h3" className={classes.title}>Mobility Solutions IT</Typography>
            <br/>
            <Typography variant="body1">Mobility Solutions, das Daimler Buses Innovation Lab, steckt stehts voller Energie und Ideen. Hier werden neue und innovative Features 
            rund um Connectivity und Digitalisierung entwickelt. 
            </Typography>
            <Typography variant="body1">
                Vielleicht könnte hier ja noch mehr tolles stehen, inklusive nem Logo oder so :-)
            </Typography>
        </>
    );
}

export default About;