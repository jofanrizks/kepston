import { useState } from "react";

export default function IdentifyModal({ data, onClose, onSubmit }) {
  const [nama, setNama] = useState("");
  const [userId, setUserId] = useState("");

  if (!data) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 24,
          width: 400,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 style={{ fontWeight: 700 }}>Identifikasi Pelanggar</h5>

        <p style={{ fontSize: 13, color: "#6b7280" }}>
          {data.jenis} - {data.lokasi}
        </p>
        
        <input
          className="form-control mb-2"
          placeholder="Nama Pelanggar"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="NIP"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={onClose}>
            Batal
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onSubmit(data.id, nama, userId)}
            disabled={!nama || !userId}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}