import React from "react";
import "./App.scss";
import "./assets/fonts/times new roman italic.ttf";
import Main from "./containers/Main";
import {HashRouter, Route, Routes} from "react-router-dom";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Main />} />
                <Route path="/resume" render={({ location }) => {
                    window.ga(
                        'set',
                        'page',
                        location.pathname + location.search
                    );
                    window.ga('send', 'pageview');
                    return null;
                }} element={<Resume />} />
            </Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
