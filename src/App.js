import React from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error"


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/*children configuration are render here accordingly to the path 
      i.e., ALL THE CHILDREN WILL GO IN THE OUTLET */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
    ]
  }
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// export default root;
