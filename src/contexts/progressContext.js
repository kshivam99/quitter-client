import React, { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export function ProgressProvider({children}) {
    const [ auth, setAuth ] = useState( JSON.parse(localStorage.getItem("progress")) || null);

    return(
        <ProgressContext.Provider value={{ auth, setAuth }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    return useContext(ProgressContext);
  }
  