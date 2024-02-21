import React from "react";
import "./App.scss";
import "./assets/fonts/times new roman italic.ttf";
import Main from "./containers/Main";
import {HashRouter, Route, Routes} from "react-router-dom";
import Resume from "./pages/resume/Resume";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
        <Route
          path="/resume"
          render={({location}) => {
            window.ga("set", "page", "/resume");
            window.ga("send", "pageview");
            return null;
          }}
          element={<Resume />}
        />
        <Route path="/skills">
          <Route index element={<Main />} />
        </Route>
        <Route path="/opensource">
          <Route index element={<Main />} />
        </Route>
        <Route path="/blogs">
          <Route index element={<Main />} />
        </Route>
        <Route
          path="/contact"
          render={() => {
            window.ga("set", "page", "/contact");
            window.ga("send", "pageview");
          }}
        >
          <Route index element={<Main />} />
        </Route>
        <Route path="/experience">
          <Route index element={<Main />} />
        </Route>
        <Route
          path="/services"
          render={() => {
            window.ga("set", "page", "/services");
            window.ga("send", "pageview");
          }}
        >
          <Route index element={<Main />} />
        </Route>
        <Route path="/availability">
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
