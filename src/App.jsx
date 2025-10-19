import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

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
