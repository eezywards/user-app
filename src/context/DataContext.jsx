import React, { createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [account, setAccount] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [signup, setSignup] = useState(false);

    return (
        <DataContext.Provider value={{ account, setAccount, isConnected, setIsConnected, signup, setSignup }}>
            {children}
        </DataContext.Provider>
    );
}