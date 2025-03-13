import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./UploadPage";
import ViewScoresPage from "./ViewScoresPage";
import ViewExplanationsPage from "./ViewExplanationsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/view-scores" element={<ViewScoresPage />} />
        <Route path="/view-explanations" element={<ViewExplanationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
