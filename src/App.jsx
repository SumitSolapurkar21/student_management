
import './App.css'
import { UserProvider } from './components/context/stateContext'
import RouteComponent from './components/route/route'

function App() {

  return (
    <>
    <UserProvider>
      <RouteComponent />
    </UserProvider>
    </>
  )
}

export default App
