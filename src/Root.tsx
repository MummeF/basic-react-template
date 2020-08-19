import { makeStyles, setRef } from "@material-ui/core";
import React from "react";
import BasicRouter from "react-basic-routing";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { routes } from "./library/Routes";
import Page404 from "./views/Page404";



export default function Root() {
    // const theme = useTheme();
    const isMobile = React.useRef(window.innerWidth < 480);
    React.useEffect(() => {
        setRef(isMobile, window.innerWidth < 480)
    });
    const useStyles = makeStyles({
        root: {
            margin: "auto",
            marginBottom: "2.5em",
            marginTop: "2.5em",
            width: isMobile.current ? "85%" : "75%",
        },
    });

    const classes = useStyles();
    const beforeRoutes = (<>
        <Header />
        <br />
    </>)
    const afterRoutes = (<>
        <Footer />
    </>)

    return <>
        <BasicRouter
            routes={routes}
            nameToWindowTitle
            windowTitle="Basic React App"
            beforeRoutes={beforeRoutes}
            afterRoutes={afterRoutes}
            routesClassName={classes.root}
            error404={{
                name: "404",
                child: <Page404 />
            }}
        />
    </>
}