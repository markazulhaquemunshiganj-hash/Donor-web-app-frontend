import React, { useEffect, useState } from 'react';
import API from "../api";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // <-- Add this

export default function DonorList(){
  const [donors, setDonors] = useState([]);

  useEffect(()=>{ API.get('/donors').then(r=>setDonors(r.data)); }, []);

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {donors.map(d=> (
        <div key={d._id} style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}>
          <div><strong>নাম:</strong> {d.name}</div>
          <div><strong>বই নং:</strong> {d.book_no || '-'}</div>
          <div><strong>ঠিকানা:</strong> {d.address || '-'}</div>
          <div>
            <strong>মোবাইল:</strong> {d.phone || '-'}
            {d.phone && (
              <span style={{ marginLeft: 8 }}>
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${d.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  style={{ color: "#25D366", marginRight: 8, fontSize: 20 }}
                >
                  <FaWhatsapp />
                </a>
                {/* Phone Call */}
                <a
                  href={`tel:${d.phone}`}
                  title="Call"
                  style={{ color: "#075E54", fontSize: 20 }}
                >
                  <FaPhone />
                </a>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
};