import React, { createContext, ReactNode, useContext, useState , useEffect} from "react";
import * as AuthSession from "expo-auth-session";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    REDIRECT_URI,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
} from "../configs"

import { api } from "../services/api";

import {COLLECTION_USER }from "../configs/dataBase";

type User = {
    id: string;
    username: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children} : AuthProviderProps ){
    const [ user, setUser] = useState<User>({} as User);
    const [ loading, setLoading] = useState(false);

  async function signIn(){
        try{
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            
            const { type, params} = await AuthSession.startAsync({ authUrl}) as AuthorizationResponse;

            if(type === "success" && !params.error){
                api.defaults.headers.common['authorization'] = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

                const userData = {
                    ...userInfo.data,
                    token: params.access_token
                }
                
                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

                setUser(userData)
            }

        }catch{
            throw new Error('Não foi possivel autenticar')
        }finally{
            setLoading(false)
        }
    }

    async function checkUserInLocalStorage() {
        const storage = await AsyncStorage.getItem(COLLECTION_USER)
        
        if(storage){
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.common['authorization'] = `Bearer ${userLogged.token}` ;

            setUser(userLogged);
        }
    }

    useEffect(() => {
        checkUserInLocalStorage();

    },[]);
    
    return(
        <AuthContext.Provider value={{
            user,
            loading,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context
}

export {
    AuthProvider,
    useAuth
}