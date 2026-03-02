import React, { useReducer, useRef, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext"; 
import './AIChatbot.css';

const initialState = {
  messages: [
    { 
      id: 1, 
      text: "Hi there! I'm your Lumen-Ra Ally. I'm here to help you navigate challenging situations and become a better ally. What would you like to talk about today?", 
      sender: 'bot' 
    }
  ],
  input: '',
  isTyping: false,
  sessionId: null, // Track session for the backend
};

function chatReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_INPUT': return { ...state, input: action.payload };
    case 'SEND_MESSAGE': return { ...state, messages: [...state.messages, action.payload], input: '' };
    case 'TOGGLE_TYPING': return { ...state, isTyping: action.payload };
    case 'SET_SESSION': return { ...state, sessionId: action.payload };
    case 'RESET_CHAT': return { ...initialState };
    default: return state;
  }
}

const AIChatbot = ({ user = { name: "Lumen Ra", id: "user_123" } }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const { token } = useContext(AuthContext); 
  const scrollRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state.messages, state.isTyping]);

  const initials = user.name.split(' ').map(n => n[0]).join('').toLowerCase().slice(0, 2);

  const onSend = async (e, customText = null) => {
    if (e) e.preventDefault();
    
    const messageToSend = customText || state.input;
    if (!messageToSend.trim()) return;

    // 1. UI: Add User Message immediately
    dispatch({ 
      type: 'SEND_MESSAGE', 
      payload: { id: Date.now(), text: messageToSend, sender: 'user' } 
    });
    
    dispatch({ type: 'TOGGLE_TYPING', payload: true });

    try {
      // 2. Fetch API with the required userId and sessionId
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageToSend,
          userId: user.id, // REQUIRED BY YOUR BACKEND
          sessionId: state.sessionId 
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // 3. UI: Add Bot Response from API
        dispatch({ 
          type: 'SEND_MESSAGE', 
          payload: { id: Date.now() + 1, text: data.reply || data.message, sender: 'bot' } 
        });

        // 4. Update session ID if the backend provides one
        if (data.sessionId) {
          dispatch({ type: 'SET_SESSION', payload: data.sessionId });
        }
      } else {
        throw new Error(data.error || "Failed to get response");
      }

    } catch (err) {
      console.error("API Error:", err);
      dispatch({ 
        type: 'SEND_MESSAGE', 
        payload: { id: Date.now() + 1, text: "I'm having trouble connecting right now. Please try again later.", sender: 'bot' } 
      });
    } finally {
      dispatch({ type: 'TOGGLE_TYPING', payload: false });
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-frame">
        <div className="alert-bar">
          <span>⚠️</span> <strong>Privacy Notice:</strong> Your conversations are private.
        </div>

        <header className="chat-nav">
          <div className="nav-profile">
            <div className="user-initials">
              {initials}
              <span className="online-status"></span>
            </div>
            <div className="user-details">
              <h2>{user.name}</h2>
              <small>● Online</small>
            </div>
          </div>
          <div className="nav-actions">
            <button className="btn-clear" title="Reset Chat" onClick={() => dispatch({ type: 'RESET_CHAT' })}>🗑️</button>
          </div>
        </header>

        <div className="chat-scroller" ref={scrollRef}>
          {state.messages.map((m) => (
            <div key={m.id} className={`msg-group ${m.sender}`}>
              {m.sender === 'bot' && <div className="bot-avatar"></div>}
              <div className="msg-bubble">{m.text}</div>
            </div>
          ))}
          {state.isTyping && (
            <div className="msg-group bot">
              <div className="bot-avatar"></div>
              <div className="msg-bubble typing-dots">...</div>
            </div>
          )}
        </div>

        <footer className="chat-controls">
          <div className="suggestion-pills">
            <button onClick={(e) => onSend(e, "How do I start a conversation?")}>
              How do I start a conversation?
            </button>
            <button onClick={(e) => onSend(e, "What are common GBV warning signs?")}>
              What are common GBV warning signs?
            </button>
          </div>

          <form className="input-field" onSubmit={onSend}>
            <input 
              placeholder="Type your message..."
              value={state.input}
              onChange={(e) => dispatch({ type: 'UPDATE_INPUT', payload: e.target.value })}
              disabled={state.isTyping}
            />
            <button type="submit" className="btn-send" disabled={state.isTyping || !state.input.trim()}>
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="white"/></svg>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default AIChatbot;