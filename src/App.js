import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LoginPage = React.lazy(() => import("./Components/LoginPage"));
const DemoPagination = React.lazy(() => import("./Components/DemoPagination"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/pagination" element={<DemoPagination />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
