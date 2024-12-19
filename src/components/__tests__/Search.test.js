import "@testing-library/jest-dom"
import Body from "../Body";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

// test("Search Results on Homepage", () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );

//   //   console.log(body);

//   const searchBtn = body.getByTestId("search-btn");
//   console.log(searchBtn);
// });


test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //   console.log(body);

  const shimmer = body.getByTestId("shimmer");

//   expect(shimmer).toBeInTheDocument();
expect(shimmer.children.length).toBe(12);
  console.log(shimmer);
});


test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //   console.log(body);

  await waitFor(() => expect(screen.getByTestId("search-btn")))

  const shimmer = body.getByTestId("shimmer");

//   expect(shimmer).toBeInTheDocument();

expect(shimmer.children.length).toBe(12);
  console.log(shimmer);
});
