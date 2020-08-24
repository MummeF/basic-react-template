import { createStyles, Theme } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import Loader from 'react-loader-spinner';

export interface ILovelyLoaderProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            textAlign: "center"
        }
    })
);

const LovelyLoader: React.FunctionComponent<ILovelyLoaderProps> = (props: ILovelyLoaderProps) => {
    const classes = styles();

    return (
        <>
            <div className={classes.root}>
                <Loader type="Hearts" color={grey[700]} height={80} width={160} />
            </div>

        </>
    );
}

export default LovelyLoader;