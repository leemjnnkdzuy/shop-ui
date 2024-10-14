import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout/";

let Router;
if (process.env.NODE_ENV === 'development') {
  Router = require('react-router-dom').BrowserRouter;
} else {
  Router = require('react-router-dom').HashRouter;
}

function App() {
  return (
    <Router>
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
