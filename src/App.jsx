
import './App.css'
import { UserProvider } from './components/context/stateContext'
import RouteComponent from './components/route/route'
import 'sweetalert2/src/sweetalert2.scss'

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
