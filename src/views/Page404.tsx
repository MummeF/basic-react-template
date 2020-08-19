import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles } from '@material-ui/core';

export interface IPage404Props {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        }
    })
);

const Page404: React.FunctionComponent<IPage404Props> = (props: IPage404Props) => {
    const classes = styles();

    return (
        <>
            <Typography variant="h1" className={classes.title}>Page not found : - (</Typography>
        </>
    );
}

export default Page404;