import React, { useContext, useState } from 'react';
import merge from 'deepmerge';

const AccountContext = React.createContext();

export function useAccount() {
    return useContext(AccountContext);
}

export function AccountProvider({ children }) {
    const [accountInfo, setAccountInfo] = useState({
        loggedIn: false,
        showLogin: false
    });

    function updateAccountInfo(info) {
        setAccountInfo(merge(accountInfo, info));
    }

    function setAccInfo(info) {
        setAccountInfo(info);
    }

    return (
        <AccountContext.Provider value={{accountInfo, updateAccountInfo, setAccInfo}}>
            {children}
        </AccountContext.Provider>
    )
}