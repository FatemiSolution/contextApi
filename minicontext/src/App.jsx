import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./useContext/UserContextProvider"
function App() {
  

  return (
   <UserContextProvider>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App

