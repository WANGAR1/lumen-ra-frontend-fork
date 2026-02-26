import React, { useReducer, useRef, useEffect } from 'react';
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
};

function chatReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_INPUT': return { ...state, input: action.payload };
    case 'SEND_MESSAGE': return { ...state, messages: [...state.messages, action.payload], input: '' };
    case 'TOGGLE_TYPING': return { ...state, isTyping: action.payload };
    case 'RESET_CHAT': return { ...initialState };
    default: return state;
  }
}

const AIChatbot = ({ user = { name: "Lumen Ra" } }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const scrollRef = useRef(null);

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

    // 1. UI: Add User Message
    dispatch({ 
      type: 'SEND_MESSAGE', 
      payload: { id: Date.now(), text: messageToSend, sender: 'user' } 
    });
    
    // 2. UI: Show Typing indicator
    dispatch({ type: 'TOGGLE_TYPING', payload: true });

    // --- FETCH API SPACE ---
    try {
      const response = await fetch('https://your-api-endpoint.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend })
      });
      const data = await response.json();
      
      dispatch({ 
        type: 'SEND_MESSAGE', 
        payload: { id: Date.now() + 1, text: data.reply, sender: 'bot' } 
      });
      

      // Mocking the delay for now
      setTimeout(() => {
        dispatch({ 
          type: 'SEND_MESSAGE', 
          payload: { 
            id: Date.now() + 1, 
            text: "I hear you. As an ally, it's important to focus on active listening and asking how you can best support the person.", 
            sender: 'bot' 
          } 
        });
        dispatch({ type: 'TOGGLE_TYPING', payload: false });
      }, 1200);

    } catch (err) {
      console.error("API Error:", err);
      dispatch({ type: 'TOGGLE_TYPING', payload: false });
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-frame">
        <div className="alert-bar">
          <span>⚠️</span> <strong>Privacy Notice:</strong> Your conversations are private. Use "Delete Session" to clear history.
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
            <button className="btn-clear" onClick={() => dispatch({ type: 'RESET_CHAT' })}>🗑️</button>
            <button className="btn-logout">Log out</button>
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
            <button onClick={() => onSend(null, "How do I start a conversation?")}>
              How do I start a conversation?
            </button>
            <button onClick={() => onSend(null, "What are common GBV warning signs?")}>
              What are common GBV warning signs?
            </button>
            <button onClick={() => onSend(null, "I'm worried about saying the wrong thing.")}>
              I'm worried about saying the wrong thing.
            </button>
          </div>

          <form className="input-field" onSubmit={onSend}>
            <input 
              placeholder="Type your message..."
              value={state.input}
              onChange={(e) => dispatch({ type: 'UPDATE_INPUT', payload: e.target.value })}
            />
            <button type="submit" className="btn-send">
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="white"/></svg>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default AIChatbot;