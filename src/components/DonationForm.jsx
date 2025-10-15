import React, { useEffect, useState } from 'react';
import API from '../api';

export default function DonationForm(){
  const [donors, setDonors] = useState([]);
  const [donorId, setDonorId] = useState('');
  const [amount, setAmount] = useState('');
  const [receipt, setReceipt] = useState('');
  const [monthYear, setMonthYear] = useState('');

  useEffect(()=>{ API.get('/donors').then(r=>setDonors(r.data)); }, []);

  const submit = async (e) =>{
    e.preventDefault();
    await API.post('/donations', { donorId, amount, payment_date: new Date(), receipt_no: receipt, month_year: monthYear });
    alert('দান রেকর্ড করা হয়েছে');
    setAmount(''); setReceipt('');
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
      <select value={donorId} onChange={e=>setDonorId(e.target.value)} required>
        <option value="">দাতা নির্বাচন করুন</option>
        {donors.map(d=> <option key={d._id} value={d._id}>{d.name} — {d.book_no || '-'}</option>)}
      </select>
      <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="পরিমাণ" required />
      <input value={receipt} onChange={e=>setReceipt(e.target.value)} placeholder="রশিদ নং" />
      <input value={monthYear} onChange={e=>setMonthYear(e.target.value)} placeholder="মাস-বছর (e.g. 2025-10)" required />
      <button type="submit">রেকর্ড কর</button>
    </form>
  )
}
