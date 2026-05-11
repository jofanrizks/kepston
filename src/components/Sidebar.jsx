import React from 'react';

const menuItems = [
  { id: 'dashboard', icon: '📊', label: 'Dashboard' },
  { id: 'cctv', icon: '📷', label: 'Live CCTV' },
];

const menuLaporan = [
  { id: 'laporan', icon: '📋', label: 'Laporan' },
  { id: 'riwayat', icon: '🕒', label: 'Riwayat' },
];

const menuPengaturan = [
  { id: 'area', icon: '📍', label: 'Kelola Area' },
  { id: 'pengguna', icon: '👥', label: 'Pengguna' },
  { id: 'pengaturan', icon: '⚙️', label: 'Pengaturan' },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-section-label">Menu Utama</div>
      {menuItems.map(item => (
        <div
          key={item.id}
          className={`sidebar-menu-item ${activePage === item.id ? 'active' : ''}`}
          onClick={() => setActivePage(item.id)}
        >
          <span style={{ fontSize: 16 }}>{item.icon}</span>
          {item.label}
        </div>
      ))}

      <div className="sidebar-section-label">Laporan</div>
      {menuLaporan.map(item => (
        <div
          key={item.id}
          className={`sidebar-menu-item ${activePage === item.id ? 'active' : ''}`}
          onClick={() => setActivePage(item.id)}
        >
          <span style={{ fontSize: 16 }}>{item.icon}</span>
          {item.label}
        </div>
      ))}

      <div className="sidebar-section-label">Pengaturan</div>
      {menuPengaturan.map(item => (
        <div
          key={item.id}
          className={`sidebar-menu-item ${activePage === item.id ? 'active' : ''}`}
          onClick={() => setActivePage(item.id)}
        >
          <span style={{ fontSize: 16 }}>{item.icon}</span>
          {item.label}
        </div>
      ))}

      {/* System status */}
      <div style={{ margin: '20px 16px 0', padding: '12px', background: '#f0fdf4', borderRadius: 10, border: '1px solid #bbf7d0' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#065f46', marginBottom: 4 }}>🟢 Sistem Aktif</div>
        <div style={{ fontSize: 10.5, color: '#047857' }}>AI Detection: Online</div>
        <div style={{ fontSize: 10.5, color: '#047857' }}>4 Kamera Terhubung</div>
      </div>
    </aside>
  );
}