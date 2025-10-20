import React from 'react';
import DonorForm from './DonorForm'; 
import DonationForm from './DonationForm';
import DueList from './DueList';
import DonorList from './DonorList';

export default function App(){
  return (
    <div style={{ maxWidth: 900, margin: '20px auto', padding: 20 }}>
      <h1>Donor Manager (MongoDB)</h1>
      <section>
        <DonorList/ >
      </section>
      <section>
        <h2>নতুন দাতা যোগ</h2>
        <DonorForm />
      </section>
      <section>
        <h2>দান রেকর্ড</h2>
        <DonationForm />
      </section>
      <section>
        <h2>বকেয়া তালিকা</h2>
        <DueList />
      </section>
    </div>
  )
}
