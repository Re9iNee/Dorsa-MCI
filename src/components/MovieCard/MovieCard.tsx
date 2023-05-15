import { ReactElement, RefObject, forwardRef } from "react";
import { styled } from "styled-components";

type Props = {
    title: string;
    rating: number;
    coverImage: string;
};
type RefType =
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;

const MovieCard = (
    { title, rating, coverImage }: Props,
    ref: RefType
): ReactElement => {
    return (
        <MainContainer ref={ref}>
            <img src={coverImage} alt={title} />
            <h4>{title}</h4>
            rating: <span>{rating}</span> out of 5
        </MainContainer>
    );
};

export default forwardRef(MovieCard);

const MainContainer = styled.div`
    max-width: 220px;

    display: flex;
    flex-direction: column;
`;
