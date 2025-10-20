import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => setLoggedIn(true);

  return (
    <>
      {loggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;
