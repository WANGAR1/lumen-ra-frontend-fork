{/* =================Search Bar Section================== */}
import React from "react";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/searchicon.svg?react";

const SearchBar = () => {

 const [query, setQuery] = useState("");
 const [loading, setLoading] = useState(false);
 const [results, setResults] = useState([]);
 const [error, setError] = useState("");

 const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);

    try {
 const response = await fetch(`https://api.${query}`);
 const data = await response.json();
      setResults(data.results || []);
    } catch {
        setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
    };
    {/* =================Set error and timeout================== */}
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
          <SearchIcon className="search-icon" />

        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}/>
          </div>

        <button onClick={handleSearch} 
          disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
       
       {error && <div className="error-popup">{error}</div>}

      <div className="search-results">
        {loading && <p>Fetching results...</p>}
        {!loading && results.length > 0 && (
          <ul>
            {results.map((item, index) => (
            <li key={index}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            {item.url && (
            <a href={item.url} 
            target="_blank" rel="noopener noreferrer">
            Visit
            </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;