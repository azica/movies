import { FC } from "react";

declare global {
    type Routes = {
        path: string;
        id: number;
        element: JSX.Element;
        children?: {
            path: string;
            id: number;
            element: JSX.Element;
        }[];
    }

    type ErrorResponse = {
        status: number;
        message: string;
    };

    type Movie = {
        id: number;
        title: string;
        poster: string;
        rating: string;
        year: string;
        trailer: string;
        genre: string;
        director?: string;
        actors?: string;
        plot: string;
        trailer: string;
        runtime?: string;
        awards?: string;
        country?: string;
        language?: string;
        boxOffice?: string;
        production: string;
        website: string;
    }

    type Animal = {
        id: number;
        name: string;
        species: string;
        family: string;
        habitat: string;
        place_of_found: string;
        diet: string;
        description: string;
        weight_kg: number
        height_cm: number
        image: string;
    }
}