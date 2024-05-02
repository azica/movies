import { $api } from "api";
import { useQuery } from "react-query"


const fetchMovies = async (querystring: string) => {
    try {
        const response = await $api.get(`/movies?limit=5&${querystring}`);
        return response.data;
    } catch (error) {
        throw new Error((error as ErrorResponse).message || 'Failed to fetch data');
    }
}

export const useFetchMovies = (querystring: string) => {
    console.log(querystring)
    return useQuery(
        ["movies", querystring],
        () => fetchMovies(querystring),
        {
            staleTime: 300000,
            refetchOnWindowFocus: false,
        }
    )
}