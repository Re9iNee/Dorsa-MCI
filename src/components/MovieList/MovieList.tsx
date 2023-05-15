import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";
import getAllMovies from "../../services/movies/getAll.service";
import { MoviePure, ServerResponsePure } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../Loader";

const MovieList = () => {
    const { data, fetchNextPage, isLoading, isFetchingNextPage } =
        useInfiniteQuery<ServerResponsePure<MoviePure>>({
            cacheTime: Infinity,
            staleTime: Infinity,
            queryKey: ["movies"],
            queryFn: getAllMovies,
            keepPreviousData: true,

            getNextPageParam: (lastPage) => {
                if (lastPage.max_num_pages === lastPage.paged) {
                    // end of data
                    return undefined;
                }

                return lastPage.paged + 1;
            },
            getPreviousPageParam: (previousPage) => previousPage.paged - 1,
        });

    const { inView, ref } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    return (
        <MainContainer>
            {isLoading && <Loader />}

            {data?.pages?.map((page) => {
                return page.data.map((movie) => (
                    <MovieCard
                        ref={ref}
                        key={movie.id}
                        rating={movie.reviewsRate}
                        title={movie.reviewsTitle}
                        coverImage={movie.reviewsThumbnailUrl}
                    />
                ));
            })}

            {isFetchingNextPage && <Loader />}
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
