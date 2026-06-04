import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const now = new Date();

  const timeStr = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const dateStr = now.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const isCCTV = location.pathname === '/cctv';

  return (
    <nav className="app-navbar">
      <div className="d-flex align-items-center">
        <span className="navbar-logo">EPSON®</span>
        <span className="navbar-title">
          K3 Monitoring Dashboard
        </span>
      </div>

      <div className="navbar-actions">
        <div className="d-none d-md-flex align-items-center gap-1 me-2">
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 12,
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            {dateStr} · {timeStr}
          </span>
        </div>

        <button
          className={`nav-icon-btn ${isCCTV ? 'active-cctv' : ''}`}
          onClick={() =>
            navigate(isCCTV ? '/dashboard' : '/cctv')
          }
          title="Live CCTV"
        >
          📷

          {isCCTV && (
            <span
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                background: '#f05252',
                color: '#fff',
                fontSize: 8,
                fontWeight: 700,
                borderRadius: 20,
                padding: '1px 5px',
                fontFamily: 'monospace'
              }}
            >
              LIVE
            </span>
          )}
        </button>

        <button
          className="nav-icon-btn"
          title="Notifikasi"
        >
          🔔
          <span className="notif-badge">3</span>
        </button>

        <div
          className="d-flex align-items-center gap-2"
          style={{ cursor: 'pointer' }}
        >
          <div className="user-avatar">SK</div>

          <div className="user-info d-none d-md-block">
            <div className="name">
              Sabita Khansa Dewi
            </div>
            <div className="role">
              Administrator
            </div>
          </div>

          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 12
            }}
          >
            ▾
          </span>
        </div>
      </div>
    </nav>
  );
}