import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = () => {
    return (
        <Spinner
            animate={{ rotate: 360 }}
            transition={{
                loop: Infinity,
                ease: "linear",
                duration: 0.4,
                repeat: Infinity,
            }}
        >
            <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M30.4849 16C31.3217 16 32.0074 16.6799 31.9283 17.5129C31.6452 20.4945 30.5292 23.348 28.6937 25.7402C26.5495 28.5345 23.5432 30.5432 20.1411 31.4548C16.739 32.3664 13.1311 32.1299 9.87707 30.7821C6.62303 29.4342 3.90467 27.0503 2.14359 24C0.38252 20.9497 -0.32285 17.4036 0.136882 13.9116C0.596614 10.4196 2.19576 7.17683 4.68629 4.68629C7.17683 2.19576 10.4196 0.596615 13.9116 0.136882C16.9011 -0.256692 19.9302 0.203633 22.654 1.44922C23.4149 1.79721 23.6608 2.73104 23.2425 3.45568C22.8241 4.18033 21.9 4.41954 21.1316 4.08847C18.9924 3.16687 16.6349 2.83464 14.3071 3.14111C11.4764 3.51377 8.84779 4.81006 6.82893 6.82893C4.81006 8.8478 3.51377 11.4764 3.14111 14.3071C2.76844 17.1378 3.34022 20.0123 4.76778 22.4849C6.19533 24.9575 8.39888 26.89 11.0367 27.9826C13.6744 29.0752 16.599 29.2669 19.3568 28.5279C22.1147 27.789 24.5516 26.1607 26.2897 23.8955C27.719 22.0328 28.61 19.8251 28.8815 17.5117C28.979 16.6806 29.6482 16 30.4849 16Z'
                    fill='#879DB2'
                />
            </svg>
        </Spinner>
    );
};

export default Loader;

const Spinner = styled(motion.div)`
    margin: 40px;

    height: 32px;
    width: 32px;
    & svg {
        height: 100%;
        width: 100%;
    }
`;
