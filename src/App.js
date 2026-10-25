import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {HashRouter, Route, Routes, Navigate} from "react-router-dom";
import Resume from "./pages/resume/Resume";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/experience" element={<Main />} />
        <Route path="/skills" element={<Main />} />
        <Route path="/blogs" element={<Main />} />
        <Route path="/contact" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Navigate to="/contact" replace />} />
        <Route
          path="/availability"
          element={<Navigate to="/contact" replace />}
        />
        <Route
          path="/opensource"
          element={<Navigate to="/contact" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
