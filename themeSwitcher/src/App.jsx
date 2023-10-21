import { themeProvider } from './context/theme'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
 const [theme, settheme] = useState('light')
 const darkTheme =()=>{
  settheme('dark');
 }
 const lightTheme =()=>{
  settheme('light');
 }
  // actual change in theme 
  useEffect(() => {
   document.querySelector('html').classList.remove('light','dark')
   document.querySelector('html').classList.add(theme);
  }, [theme])
  

  return (
    <themeProvider value={{theme,darkTheme,lightTheme}} >

    <div className=''>
      <div className=''>
          <div className=''>
            {/* theme Btn */}
          </div>
          <div className=''>
            {/*Card*/}
          </div>
      </div>

    </div>
    </themeProvider>
  )
}

export default App
