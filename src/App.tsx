import "./App.css";
import { createContext, useMemo, useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { ContextModel, SortBy } from "./types";
import { styled } from "styled-components";

import Navigation from "./components/Navigation";

export const AppContext = createContext<ContextModel | undefined>(undefined);

function App() {
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEWEST);
    const memoizedContextValue = useMemo(
        () => ({ sortBy, setSortBy }),
        [sortBy, setSortBy]
    );

    return (
        <AppContext.Provider value={memoizedContextValue}>
            <PageLayout>
                <Navigation />

                <Header />

                <MovieList />
            </PageLayout>
        </AppContext.Provider>
    );
}

export default App;

const PageLayout = styled.div`
    direction: rtl;

    width: 480px;
    background-color: #f5f5f5;

    border-radius: 4px;
    box-shadow: 0 0 1px black;
`;
