import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { MoviePure, ServerResponsePure } from "../../types";

export default async function getAllMovies({
    queryKey,
    pageParam = 0,
}: QueryFunctionContext<QueryKey>): Promise<ServerResponsePure<MoviePure>> {
    const finalURL = new URL(process.env.REACT_APP_API_URL + "/animations");
    finalURL.searchParams.set("page", String(pageParam));

    const [, sortBy] = queryKey;
    finalURL.searchParams.set("sortby", String(sortBy));

    try {
        const response = await fetch(finalURL);
        const data: ServerResponsePure<MoviePure> = await response.json();

        return data;
    } catch (e) {
        console.error("Something went wrong while fetching movies", e);
        // TODO: Error Boundary
        throw new Error(String(e));
    }
}
