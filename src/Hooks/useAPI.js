import { useContext } from "react";
import { APIContext } from "../ContextAPI/APIContextProvider";

const useAPI = () =>
{
    return useContext(APIContext);
};
export default useAPI;