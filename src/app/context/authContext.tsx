import React, { createContext, useState, useEffect, PropsWithChildren, useContext } from "react";
import Auth from "../services/auth";
import api from "../services/api";
import { redirect } from "react-router-dom";

interface AuthInterface {
    signed: boolean;
    user: object | null;
    loginLoaging: boolean;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => void;
};

interface AuthProviderProps extends PropsWithChildren {};

const AuthContext = createContext<AuthInterface>({} as AuthInterface);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [ user, setUser ] = useState<object | null>(null);
    const [ loginLoaging, setLoginLoaging ] = useState<boolean>(false);

    useEffect( () => {
        const storageUser = localStorage.getItem("USER");
        const storageToken = localStorage.getItem("TOKEN");

        if (storageUser && storageToken) {
            api.defaults.headers.common['Authorization'] = `Bearer ${String(storageToken)}`;;
            setUser(JSON.parse(storageUser));
            setLoginLoaging(false);
        } else if (!storageUser && !storageToken) {
            redirect("/")
        }
    }, [] );

    async function signIn(username: string, password: string) {
        const AuthController = new Auth();
        const response = await AuthController.signIn(username, password);

        if (response.USER === undefined || (response.TOKEN === undefined)) {
            return window.location.replace("/");
        }

        api.defaults.headers.common['Authorization'] = `Bearer ${String(response.TOKEN)}`;;
        localStorage.setItem("USER" , JSON.stringify(response.USER));
        localStorage.setItem("TOKEN" , String(response.TOKEN));

        return window.location.replace("/");
    };

    async function signOut() {
        localStorage.removeItem("USER");
        localStorage.removeItem("TOKEN");
        setUser(null);
        return redirect("/");
    };

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user: user,
            signIn: signIn,
            signOut: signOut,
            loginLoaging: loginLoaging,
        }}>
            {children}
        </AuthContext.Provider>
        
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
};