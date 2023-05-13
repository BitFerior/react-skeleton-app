import { hot } from "react-hot-loader/root";
import "./test.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, Suspense, lazy } from "react";

const HomePage: FC | any = lazy(() => import("./pages/HomePage"));
const Layout: FC | any = lazy(() => import("./pages/Layout"));
const ContactPage: FC | any = lazy(() => import("./pages/ContactPage"));

const App = () => {
  return (
    <div className="test">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="/">
                <Layout />
              </Suspense>
            }>
            <Route
              index
              element={
                <Suspense fallback="/">
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback="/">
                  <ContactPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
