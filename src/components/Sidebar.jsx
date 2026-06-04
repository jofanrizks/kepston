import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { id: "dashboard", icon: "📊", label: "Dashboard", path: "/dashboard" },
  { id: "cctv", icon: "📷", label: "Live CCTV", path: "/cctv" },
  { id: "laporan", icon: "📋", label: "Laporan", path: "/laporan" },
  { id: "pengguna", icon: "👥", label: "Pengguna", path: "/pengguna" },


];

const menuLaporan = [
  { id: "laporan", icon: "📋", label: "Laporan", path: "/laporan" },
];

const menuPengaturan = [
  { id: "pengguna", icon: "👥", label: "Pengguna", path: "/pengguna" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="app-sidebar">
      <div className="sidebar-section-label">Menu Utama</div>

      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-menu-item ${
            location.pathname === item.path ? "active" : ""
          }`}
          onClick={() => navigate(item.path)}
        >
          <span style={{ fontSize: 16 }}>{item.icon}</span>
          {item.label}
        </div>
      ))}

      <div
        style={{
          margin: "20px 16px 0",
          padding: "12px",
          background: "#f0fdf4",
          borderRadius: 10,
          border: "1px solid #bbf7d0",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#065f46",
            marginBottom: 4,
          }}
        >
          🟢 Sistem Aktif
        </div>

        <div style={{ fontSize: 10.5, color: "#047857" }}>
          AI Detection: Online
        </div>

        <div style={{ fontSize: 10.5, color: "#047857" }}>
          4 Kamera Terhubung
        </div>
      </div>
    </aside>
  );
}