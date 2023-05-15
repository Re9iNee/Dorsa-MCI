import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <MainContainer>
            <header>
                <h3>چیارو ببینه</h3>
                <h5>مناسب برای ۳ تا ۷ سال</h5>
            </header>

            <div>مرتب سازی</div>
        </MainContainer>
    );
};

export default Header;

const MainContainer = styled.div`
    display: flex;

    justify-content: space-between;
`;
