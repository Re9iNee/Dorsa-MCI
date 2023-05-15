import { useInfiniteQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";
import { AppContext } from "../../App";
import getAllMovies from "../../services/movies/getAll.service";
import { MoviePure, ServerResponsePure } from "../../types";
import Loader from "../Loader";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("Couldn't fetch app context");

    const { sortBy } = context;

    const { data, fetchNextPage, isLoading, isRefetching, isFetchingNextPage } =
        useInfiniteQuery<ServerResponsePure<MoviePure>>({
            cacheTime: Infinity,
            staleTime: Infinity,
            queryFn: getAllMovies,
            keepPreviousData: true,
            queryKey: ["movies", sortBy],

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
            {isLoading || isRefetching ? (
                <Loader />
            ) : (
                data?.pages?.map((page) => {
                    return page.data.map((movie) => (
                        <MovieCard
                            ref={ref}
                            key={movie.id}
                            rating={movie.reviewsRate}
                            title={movie.reviewsTitle}
                            coverImage={movie.reviewsThumbnailUrl}
                        />
                    ));
                })
            )}

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
