import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Router from "./route/Router"
import { ToastContainer } from 'react-toastify'

function App() {
   const initiaLoading = useSelector(state => state.auth.initiaLoading)
   if(initiaLoading) {
    return  <Loading />
   }
  return ( <div>
  
  <Router />
  <ToastContainer  position="bottom-center" theme="dark" autoClose={3000}/>
  </div>
  );
}

export default App
