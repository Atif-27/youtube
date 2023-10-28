import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import ResultPage from "./components/ResultPage";
import Subscriptions from "./components/Subscriptions";
import LikedVideos from "./components/LikedVideos";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Head />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <ResultPage />,
        },
        {
          path: "/subscription",
          element: <Subscriptions />,
        },
        {
          path: "/liked",
          element: <LikedVideos />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
