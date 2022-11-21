import React from "react";
import "./App.scss";
import "./assets/fonts/times new roman italic.ttf";
import Main from "./containers/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Main />} />
{/*
                <Route path="*" element={<NoPage />} />
*/}
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
