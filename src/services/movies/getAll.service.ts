import { ApiResponsePure } from "../../types";

export default async function getAllMovies() {
    const url = process.env.REACT_APP_API_URL;
    try {
        const response = await fetch(url + "/animations");
        const data: ApiResponsePure = await response.json();

        return data;
    } catch (e) {
        console.error("Something went wrong while fetching movies", e);
    }
}
