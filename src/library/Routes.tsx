import React from "react";
import { BasicRoute, DynamicRoute } from "react-basic-routing";
import About from "../views/About";
import Home from "../views/Home";
import CocktailSearch from "../views/cocktail/CocktailSearch";
import CocktailRandom from "../views/cocktail/CocktailRandom";
import { RouteCocktail } from "../views/cocktail/Cocktail";
import CocktailPage from "../views/CocktailPage";
import Cocktail from "../views/Cocktail";

export const routes: (BasicRoute | DynamicRoute)[] = [

    {
        path: "/",
        name: "Home",
        child: <Home />,
        exact: true
    },
    {
        path: "/about",
        name: "About",
        child: <About />,
        exact: true
    },
    
    {
        path: "/supercocktail",
        name: "Cocktail",
        child: <Cocktail />,
        exact: true
    },
    {
        path: "/cocktail",
        name: "Cocktailbar",
        child: <CocktailPage />,
        exact: true
    },
    {
        path: "/cocktail/:id",
        name: "Cocktail",
        component: RouteCocktail,
        exact: true
    },
]
