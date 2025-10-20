import React from 'react';
import DonorForm from './DonorForm'; 
import DonationForm from './DonationForm';
import DueList from './DueList';
import DonorList from './DonorList';

export default function App(){
  return (
    <div style={{ maxWidth: 900, margin: '20px auto', padding: 20 }}>
      
      <h1 style={{alignContent:'center', textAlign:'center'}}> মারকাযুল হক মুন্সিগঞ্জ (চাম্পাতলা মাদরাসা) </h1>
      <h3 style={{alignContent:'center', textAlign:'center'}}> চাম্পাতলা, পঞ্চসার, মুন্সিগঞ্জ সদর, মুন্সিগঞ্জ </h3>
      
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
