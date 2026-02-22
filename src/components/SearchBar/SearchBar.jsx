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
    setError(""); // Clear previous errors

    try {
      // Note: Ensure your API URL is correct. 
      // Changed to a template that assumes a full domain.
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      setError("Something went wrong. Please try again.");
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
          {/* FIX: Changed from <SearchIcon /> to <img> */}
          <img src={SearchIcon} alt="Search" className="search-icon" />

          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Bonus: search on Enter key
          />
        </div>

        <button onClick={handleSearch} disabled={loading}>
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
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
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