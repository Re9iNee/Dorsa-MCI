import React, { useEffect, useState } from "react";
import getAllMovies from "../../services/movies/getAll.service";
import { MovieModel } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import { styled } from "styled-components";

const MovieList = () => {
    const [movieList, setMovieList] = useState<MovieModel[]>();

    useEffect(() => {
        getAllMovies()
            .then((data) => data?.data)
            .then((list) => setMovieList(list));
    }, []);

    return (
        <MainContainer>
            {movieList?.map((movie) => (
                <MovieCard
                    key={movie.id}
                    rating={movie.reviewsRate}
                    title={movie.reviewsTitle}
                    coverImage={movie.reviewsThumbnailUrl}
                />
            ))}
        </MainContainer>
    );
};

export default MovieList;

const MainContainer = styled.div`
    gap: 1rem;
    display: flex;

    flex-wrap: wrap;
    overflow-x: scroll;
    overflow-y: hidden;
`;
