import React, { useReducer, useEffect, useRef } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/searchicon.svg";

// Initial State
const initialState = {
  query: "",
  loading: false,
  results: [],
  error: "",
  isListening: false,
  file: null,
};

// Reducer Function
function searchReducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "START_SEARCH":
      return { ...state, loading: true, error: "", results: [] };
    case "SEARCH_SUCCESS":
      return { ...state, loading: false, results: action.payload };
    case "SEARCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_LISTENING":
      return { ...state, isListening: action.payload };
    case "CLEAR_ERROR":
      return { ...state, error: "" };
    case "CLEAR_RESULTS":
      return { ...state, results: [] };
    case "SET_FILE":
     return { ...state, file: action.payload };
    case "CLEAR_FILE":
     return { ...state, file: null };
     default:
      return state;
  }
}

const SearchBar = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { query, loading, results, error, isListening, file } = state;

   // File Attachment Logic 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
  if (!selectedFile) return;

  dispatch({
    type: "SET_FILE",
    payload: selectedFile,
  });

  console.log("File selected:", selectedFile);
};

 const fileInputRef = useRef(null);

  // Voice Recognition Logic 
  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition 
    || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      dispatch({ type: "SEARCH_ERROR", 
      payload: "Voice search not supported in this browser." });
      return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      dispatch({ type: "SET_LISTENING", payload: true });
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      dispatch({ type: "SET_QUERY", payload: transcript });
    };

    recognition.onerror = (event) => {
      dispatch({ type: "SEARCH_ERROR", 
      payload: `Speech error: ${event.error}` });
      dispatch({ type: "SET_LISTENING",
      payload: false });
    };

    recognition.onend = () => {
      dispatch({ type: "SET_LISTENING", payload: false });
    };

    recognition.start();
  };

  // API Search Logic
  const handleSearch = async () => {
    if (!query.trim()) return;
    dispatch({ type: "START_SEARCH" });

    try {
      const response = await fetch("https://lumenra.onrender.com/api/ai/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query }),
      });

      if (!response.ok) throw new Error("Search failed");

      const result = await response.json();

      if (result.success && result.data) {
        dispatch({
          type: "SEARCH_SUCCESS",
          payload: [{ title: "AI Response", description: result.data }],
        });
      } else {
        dispatch({ type: "SEARCH_ERROR", payload: "No results found." });
      }
    } catch (err) {
      console.log(err)
      dispatch({ type: "SEARCH_ERROR", payload: "Could not connect to server." });
    }
  };

  // Auto-clear error after 3 seconds
  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => dispatch({ type: "CLEAR_ERROR" }), 3000);
    return () => clearTimeout(timer);
  }, [error]);

   return (
    <div className="search-wrapper-main">
      <div className={`search-pill ${isListening ? "active-glow" : ""}`}>
         <input
          type="file"
          ref={fileInputRef}
          id="file-upload"
          style={{ display: "none" }}
          className="hidden-file-input"
          onChange={handleFileChange}/>

        <img src={SearchIcon} alt="Search" className="icon-search-left" />
        
        <input
          type="text"
          placeholder={isListening ? "Listening..." : "Search"}
          className="search-input-field"
          value={query}
          onChange={(e) => dispatch({ type: "SET_QUERY",
          payload: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          disabled={loading}
          aria-label="Search input"/>

        <div className="utility-icons-right">
          <button 
            className={`icon-btn-util ${isListening ? "is-mic-listening" : ""}`}
            onClick={handleVoiceSearch}
            type="button"
            aria-label={isListening ? "Stop voice search" : "Start voice search"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
          </button>
          
          <button
           type="button"
           aria-label="Attach a file"
           className="icon-btn-util"
           onClick={() => fileInputRef.current?.click()}> 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
          </button>

       </div>
         {file && (
        <div className="file-preview">
        {file.name}
       <button
        aria-label="Remove attached file"
        onClick={() => dispatch({ type: "CLEAR_FILE" })}>×
      </button>
      </div>
    )}
       </div>

      {loading && <div className="loading-indicator"></div>}
      {error && <div className="error-toast">{error}</div>}

      {/* Result Card */}
      {!loading && results.length > 0 && (
        <div className="ai-result-card">
          <button className="close-card-btn"
           onClick={() => dispatch({ type: "CLEAR_RESULTS" })}>
            &times;
          </button>
          {results.map((item, index) => (
            <div key={index}>
              <h3 className="result-header">{item.title}</h3>
              <p className="result-body">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;