import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./main_pages/Home";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import { AuthUserContextProvider } from "./Context1/AuthUserContext";
import Products from "./main_pages/Products";
import Jewellery from "./main_pages/Jewellery";
import Protected_Route from "./Naviagations/Protected_Route";
import Cart from "./main_pages/Cart";
import Profile from "./main_pages/Profile";




const router = createBrowserRouter([
  {
    path:'/',
    element: (<Home></Home>)
  },
  {
    path:'/login',
    element:(<Login></Login>)
  },
  {
    path:'/signup',
    element:(<SignUp></SignUp>)
  },
  {
    path:'/products',
    element:(<Products></Products>)
  },
  {
    path:'/jewellery',
    element:(<Jewellery></Jewellery>)
  },
  {
    path:'/cart',
    element:(<Protected_Route><Cart></Cart></Protected_Route>)
  },
  {
    path:'/profile',
    element:(<Profile></Profile>)
  }
  

 
])

function App() {
  return (
    <div className="App">
     <AuthUserContextProvider> 
     <RouterProvider router={router}/>
      </AuthUserContextProvider> 
    </div>
  );
}

export default App;
