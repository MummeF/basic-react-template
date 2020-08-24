import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles } from '@material-ui/core';
import { Link } from 'react-basic-routing';

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
            <br />
            <Typography variant="h5"><b>Wir lieben, was wir tun – wir lieben unser Team! </b></Typography>
            <br />
            <Typography variant="body1">Als Teil von Mobility Solutions, dem Daimler Buses Innovation Lab, sind wir für die Entwicklung von neuen Mobilitätskonzepten zuständig. In der IT entstehen innovative Prototypen und neue digitale Angebote.
            Wir sind dabei direkt am Code, programmieren und enablen Andere, das auch zu tun. Das funktioniert, weil wir ständig von- und miteinander lernen und uns gegenseitig mit viel Spaß unterstützen. Jeder kann mit seinen Fähigkeiten und Talenten dazu beitragen, egal wie diese aussehen.
            </Typography>
            <br />
            <Typography variant="body1"><b> Das hört sich gut an?
            Sprich uns einfach an und schau bei uns im Cube vorbei!
            </b></Typography>
            <Typography variant="body2"><i>#willkommenbeidennerds</i></Typography>
            <br />
            <a target="_blank" rel="noopener noreferrer" href="https://mobility-solutions.buses.daimler.com/"><img src="/img/MobSol_Logo.png" alt="logo"></img></a>

        </>
    );
}

export default About;