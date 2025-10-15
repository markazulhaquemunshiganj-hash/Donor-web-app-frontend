import React, { useEffect, useState } from 'react';
import API from '../api';

export default function DueList(){
  const [due, setDue] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const month = new Date();
      const monthYear = `${month.getFullYear()}-${String(month.getMonth()+1).padStart(2,'0')}`;
      try{
        const res = await API.get(`/due?month=${monthYear}`);
        setDue(res.data);
      }catch(e){ console.error(e); }
    })();
  }, []);

  return (
    <div>
      <ul>
        {due.length===0 && <li>কেউ বকেয়া নেই</li>}
        {due.map(d=> <li key={d.id}>{d.name} — {d.phone} — বই নং: {d.book_no || '-'}</li>)}
      </ul>
    </div>
  )
}
