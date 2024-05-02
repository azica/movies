import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { MoviesTable } from "components/MoviesTable";
import { useFetchMovies } from "services/useFetchMovies";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [searchParams] = useSearchParams();
    const [querystring, setQueryString] = useState<string>('');
    const { data, isLoading, isError, error } = useFetchMovies(querystring);

    useEffect(() => {
        const sort = searchParams.get("sort");
        const order = searchParams.get("order");
        if (sort && order) {
            setQueryString(`sort=${sort}&order=${order}`)
        }
    }, [searchParams])

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center">
            {isLoading ? (
                <CircularProgress />
            ) : isError ? (
                <div>Error: {(error as ErrorResponse).message}</div>
            ) : data ? (
                <MoviesTable movies={data} loading={isLoading} />
            ) : null}
        </Box>
    );
};

export default Movies;
