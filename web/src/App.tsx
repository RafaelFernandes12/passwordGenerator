import { AppRoutes } from "./routes";
import { userState } from "./components/auth/userState";
import './styles/global.css';

export function App() {
  const {loading} = userState()

  if(loading){
    return (
      <p>please wait</p>
    )
  }

  return (
    <>
      <AppRoutes />
    </>
  )
}

