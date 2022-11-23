import React from "react";
import "./App.scss";
import "./assets/fonts/times new roman italic.ttf";
import Main from "./containers/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Main />} />
                <Route path="/resume" element={<Resume />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
