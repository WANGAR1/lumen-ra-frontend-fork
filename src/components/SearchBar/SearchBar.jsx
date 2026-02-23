import React from "react";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/searchicon.svg"; // This is a string path

  const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
   
  const handleSearch = async () => {
  if (!query.trim()) return;
  setLoading(true);
  setResults([]);
  setError("");

  try {
    const response = await fetch('https://lumenra.onrender.com/api/ai/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query }),
    });

    if (!response.ok) throw new Error("Search failed");

    const result = await response.json();

    if (result.success && result.data) {
      setResults([{ 
        title: "AI Response", 
        description: result.data 
      }]);
    } else {
      setError("No results found.");
    }
  } catch (err) {
    console.error(err);
    setError("Could not connect to the server.");
  } finally {
    setLoading(false);
  }
  };

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="input-wrapper">
          <img src={SearchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            disabled={loading}
          />
        </div>

        <button 
          className="search-button" 
          onClick={handleSearch} 
          disabled={loading}
        >
          {loading ? <div className="spinner"></div> : "Search"}
        </button>
      </div>

      {/* Error Popup - Handled by the useEffect timer */}
      {error && <div className="error-popup">{error}</div>}

      {/* Structured AI Response Card */}
      {!loading && results.length > 0 && (
        <div className="ai-result-card">
          <button 
            className="close-results-btn" 
            onClick={() => setResults([])}
          >
            &times;
          </button>
          
          {results.map((item, index) => (
            <div key={index} className="result-content">
              <h3 className="result-title">{item.title}</h3>
              <p className="result-text">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;