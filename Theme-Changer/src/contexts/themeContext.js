import { createContext, useContext } from "react";


export const themeContext = createContext(
    {
        theme: 'light',
        lightTheme: () => { },
        darkTheme: () => { },
    }
)

export const ThemeContextProvider = themeContext.Provider

export const useThemeContext = () => useContext(themeContext)  // hook to access the context