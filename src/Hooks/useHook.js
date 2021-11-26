import { useState } from "react";

const useHook = () =>
{
    const [updateUI, setUpdateUI] = useState(0);
    return {updateUI,setUpdateUI}
};
export default useHook;