import React, { createContext } from 'react';
import useFetchData from '../Hooks/useFetchData';
import useFirebase from '../Hooks/useFirebase';

export const APIContext = createContext();
const APIContextProvider = ({ children }) =>
{
    const auth = useFirebase();
    const fetchData = useFetchData();
    return (
        <APIContext.Provider value={{fetchData,auth}}>
            {children}
        </APIContext.Provider>
    );
};

export default APIContextProvider;