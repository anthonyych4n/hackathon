import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SearchResult from "./pages/SearchResult";

function App() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("lastQuery", query);
  }, [query]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage setQuery={setQuery} query={query} />}
          />
          <Route path="/search-results" element={<SearchResult />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
