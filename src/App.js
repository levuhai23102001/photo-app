import React, { Fragment } from "react";
import "./App.css";
import MainLayout from "./layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { myRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>REDUX - PHOTO APP - M1LKY</h1>
        <Routes>
          {myRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = MainLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
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
