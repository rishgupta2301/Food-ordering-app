import react from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default root;
