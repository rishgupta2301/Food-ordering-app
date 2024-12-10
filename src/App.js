import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
// import Instamart from "./components/Instamart";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Rishabh Gupta",
    email: "rishgupta2301@gmail.com",
  });

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Header />
      <Outlet />{" "}
      {/*children configuration are render here accordingly to the path 
      i.e., ALL THE CHILDREN WILL GO IN THE OUTLET */}
      <Footer />
    </UserContext.Provider>
  );
};

const Instamart = lazy(() =>
  import("./components/Instamart")
); /** this is a promise */
// Upon on demand loading --> upon rensder --> suspend loading

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// export default root;
