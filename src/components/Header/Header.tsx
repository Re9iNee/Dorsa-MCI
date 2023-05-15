import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { SortBy } from "../../types";

const Header = () => {
    const context = useContext(AppContext);
    if (!context) return <h1>Something Went Wrong Contact Admin</h1>;
    const { sortBy, setSortBy } = context;

    return (
        <MainContainer>
            <header>
                <h3>چیارو ببینه</h3>
                <h5>مناسب برای ۳ تا ۷ سال</h5>
            </header>

            <div>مرتب سازی</div>
            <button
                onClick={() => setSortBy(SortBy.NEWEST)}
                color={sortBy === SortBy.NEWEST ? "blue" : ""}
            >
                Newest
            </button>
            <button
                onClick={() => setSortBy(SortBy.RATE)}
                color={sortBy === SortBy.RATE ? "blue" : ""}
            >
                Most Rated
            </button>
            <button
                onClick={() => setSortBy(SortBy.VIEW)}
                color={sortBy === SortBy.VIEW ? "blue" : ""}
            >
                Most View
            </button>
        </MainContainer>
    );
};

export default Header;

const MainContainer = styled.div`
    display: flex;

    justify-content: space-between;
`;
