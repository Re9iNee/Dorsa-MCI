import { createContext, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { ContextModel, SortBy } from "./types";

export const AppContext = createContext<ContextModel | undefined>(undefined);

function App() {
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEWEST);
    const memoizedContextValue = useMemo(
        () => ({ sortBy, setSortBy }),
        [sortBy, setSortBy]
    );

    return (
        <div className='App'>
            <button>Go back</button>

            <AppContext.Provider value={memoizedContextValue}>
                <Header />

                <MovieList />
            </AppContext.Provider>
        </div>
    );
}

export default App;
