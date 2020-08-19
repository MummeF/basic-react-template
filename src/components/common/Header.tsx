import { AppBar, Button, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import * as React from 'react';
import { NavLink } from "react-basic-routing";


export interface IHeaderProps {

}

// const styles = makeStyles((theme: Theme) =>
//     createStyles({
//         title: {
//             marginBottom: theme.spacing(1),
//         }
//     })
// );

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
    // const classes = styles();

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Button color="primary" variant="text" startIcon={<HomeIcon />} component={NavLink} to="/">Home</Button>
                    <Button color="primary" variant="text" startIcon={<LocalBarIcon />} component={NavLink} to="/cocktail">Cocktail-Bar</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;