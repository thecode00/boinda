import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import CsvPage from "./pages/CsvPage";
import Root from "./pages/Root";
import store from "./store/store";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data/:csvString",
        element: <CsvPage />,
      },
    ],
  },
]);

function App() {
  globalThis.jsStore = store;
  return <RouterProvider router={browserRouter}></RouterProvider>;
}

export default App;
