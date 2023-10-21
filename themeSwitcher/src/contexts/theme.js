import {createContext, useContext} from 'react';
// giving default values and initializing ThemeContext
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme : ()=>{},
    lightTheme: ()=>{},
})
// initializing ThemeProvider
export const ThemeProvider = ThemeContext.Provider
// creating custom Hook 
export default function useTheme(){
    return useContext(ThemeContext)
}