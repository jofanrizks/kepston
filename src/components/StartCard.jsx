import React from 'react';

export default function StatCard({ label, value, icon, bgColor }) {
  return (
    <div className="stat-card">
      <div>
        <div className="label">{label}</div>
        <div className="value">{value}</div>
      </div>
      <div className="stat-icon" style={{ background: bgColor }}>
        <span>{icon}</span>
      </div>
    </div>
  );
}