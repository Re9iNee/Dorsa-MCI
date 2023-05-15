import { MoviePure, ServerResponsePure } from "../../types";

export default async function getAllMovies({
    pageParam = 0,
}): Promise<ServerResponsePure<MoviePure>> {
    const API_URL = new URL(process.env.REACT_APP_API_URL + "/animations");
    API_URL.searchParams.set("page", String(pageParam));

    try {
        const response = await fetch(API_URL);
        const data: ServerResponsePure<MoviePure> = await response.json();

        return data;
    } catch (e) {
        console.error("Something went wrong while fetching movies", e);
        // TODO: Error Boundary
        throw new Error(String(e));
    }
}
