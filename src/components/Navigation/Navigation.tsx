import { styled } from "styled-components";
import ArrowRight from "./icons/arrow_right.svg";
const Navigation = () => {
    return (
        <StyleContainer>
            <img src={ArrowRight} alt='go back' />
            <span className='secondary-color'>بازگشت</span>
        </StyleContainer>
    );
};

export default Navigation;

const StyleContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: baseline;
`;
