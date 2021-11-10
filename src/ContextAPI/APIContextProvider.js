import React, { createContext } from 'react';
import useFetchData from '../Hooks/useFetchData';

export const APIContext = createContext();
const APIContextProvider = ({ children }) =>
{
    const fetchData = useFetchData();
    return (
        <APIContext.Provider value={fetchData}>
            {children}
        </APIContext.Provider>
    );
};

export default APIContextProvider;