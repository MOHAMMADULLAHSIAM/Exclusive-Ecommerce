import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import About from './Pages/About'

import SignUp from "./Pages/SignUp";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import CartProducts from "./Pages/CartProducts";
import Wish from "./Pages/Wish";
import { ToastContainer, Bounce } from 'react-toastify';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { products } from "./Slices/Slice";
import SignIN from "./Pages/SignIn";
import Contact  from "./Pages/Contact";





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      // { path: "contact", Component: Contact },

      { path: "signUp", Component: SignUp },
      { path: "contact", Component: Contact },
      { path: "signIN", Component: SignIN },
      { path: "Shop", Component: Shop },
      { path: "ProductDetails/:id", Component: ProductDetails },
      { path: "CartProducts", Component: CartProducts },
      { path: "Wish", Component: Wish },
      // {
      //   path: "auth",
      //   Component: AuthLayout,
      //   children: [
      //     { path: "login", Component: Login },
      //     { path: "register", Component: Register },
      //   ],
      // },
      // {
      //   path: "concerts",
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ":city", Component: ConcertsCity },
      //     { path: "trending", Component: ConcertsTrending },
      //   ],
      // },
    ],
  },
]);


function App() {

  const dispatch = useDispatch()
useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                dispatch(products(data.products))
            })

        }, [])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default App
