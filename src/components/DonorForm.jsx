import React, { useState } from 'react';
import API from '../api';

export default function DonorForm(){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookNo, setBookNo] = useState('');
  const [address, setAddress] = useState('');

 const submit = async (e) => {
  e.preventDefault();
  try {
    await API.post('/donors', { name, phone, book_no: bookNo, address });
    setName(''); setPhone(''); setBookNo(''); setAddress('');
    alert('✅ দাতা যুক্ত হয়েছে');
  } catch (err) {
    console.error('Error adding donor:', err);
    alert('❌ দাতা যুক্ত করতে সমস্যা হয়েছে! আবার চেষ্টা করুন।');
  }
};


  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="নাম" required />
      <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="ফোন" required />
      <input value={bookNo} onChange={e=>setBookNo(e.target.value)} placeholder="বই নং" />
      <input value={address} onChange={e=>setAddress(e.target.value)} placeholder="ঠিকানা (ঐচ্ছিক)" />
      <button type="submit">সংরক্ষণ</button>
    </form>
  )
}
