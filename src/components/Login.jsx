import React, { useState } from 'react';
import API from '../api';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      onLogin();
    } catch (err) {
      setError('ভুল ইউজারনেম বা পাসওয়ার্ড');
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', marginTop: 100 }}>
      <h2>🔐 লগইন</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
        <input placeholder="ইউজারনেম" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="পাসওয়ার্ড" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">লগইন</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
