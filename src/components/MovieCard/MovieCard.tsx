import React from "react";
import { styled } from "styled-components";

type Props = {
    title: string;
    rating: number;
    coverImage: string;
};
const MovieCard = ({ title, rating, coverImage }: Props) => {
    return (
        <MainContainer>
            <img src={coverImage} alt={title} />
            <h4>{title}</h4>
            rating: <span>{rating}</span> out of 5
        </MainContainer>
    );
};

export default MovieCard;

const MainContainer = styled.div`
    max-width: 220px;

    display: flex;
    flex-direction: column;
`;
