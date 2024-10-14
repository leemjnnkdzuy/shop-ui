import React, { Fragment, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout/";

let Router;

if (process.env.NODE_ENV === 'development') {
  Router = require('react-router-dom').BrowserRouter;
} else {
  Router = require('react-router-dom').HashRouter;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            
            let Layout = DefaultLayout;

            if (route.Layout === null) {
              Layout = Fragment;
            } else if (route.Layout) {
              Layout = route.Layout;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
