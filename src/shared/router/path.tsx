import Filter from "pages/Filter";
import Movies from "pages/Movies";

export const basicPaths = [
    {
        path: "/",
        id: 1,
        element: <Movies />,
    },
    {
        path: "/filter",
        id: 1,
        element: <Filter />,
    },
]