import { createContext, useContext } from "react";
// we can give the default value
export const themeContext = createContext({
    theme:'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{}, 
})
// creating themeProvider in the same file 
export const themeProvider = themeContext.Provider.create
// creating a custom hook to avoid importing useContext and themeContext
export default function useTheme(){
    return useContext(themeContext)
}

