// standard auth context for jwt tokens and authorization confirmation

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import React from "react";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const UserContext = createContext(null);
  
  export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
        const existingUser = await AsyncStorage.getItem('userToken');

        if (existingUser) {
            setUser(existingUser);
        }
        };

        loadUser();
    }, []);

    const signIn = async (token) => {
        await AsyncStorage.setItem('userToken', token);
        setUser(token);
    };

    const signOut = async () => {
        await AsyncStorage.removeItem('userToken');
        setUser(null);
    };
    
    return (
      <UserContext.Provider value={{ user, signIn, signOut }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useAuth must be used within a AuthContextProvider");
    }
    return context;
  };