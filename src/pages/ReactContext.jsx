import React, {createContext, useState} from "react";
import ContextKomponen1 from "../komponen/Komponen1";
import ContextKomponen2 from "../komponen/Komponen2";

export const MyContext = createContext();

const ReactContext = () => {
    const [data, setData] = useState(0);
    return(
        <div>
            {data}
            <MyContext.Provider value={[data, setData]}>
                <ContextKomponen1/>
                <ContextKomponen2/>
            </MyContext.Provider>
        </div>
    );
}

export default ReactContext;