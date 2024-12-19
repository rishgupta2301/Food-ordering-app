import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const logo = header.getByTestId("logo");

  expect(logo.src).toBe('http://localhost/dummy.png');

});

test("Online status should be green on rendering header", () => {
    // Load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if we are online
    const onlineStatus = header.getByTestId("online-status");
    // console.log("---",onlineStatus)
  
    expect(onlineStatus.innerHTML).toBe('✅');
  
  });

  test("cart should have 0 items on rendering header", () => {
    // Load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if we are online
    const cart = header.getByTestId("cart");
    console.log("---",cart)
  
    expect(cart.innerHTML).toBe("Cart - 0 items");
  
  });