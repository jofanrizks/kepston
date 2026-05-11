import React from 'react';

export default function FilterBar({ periode, lokasi, jenis, onPeriodeChange, onLokasiChange, onJenisChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">Filter Periode</span>
        <select className="filter-select" value={periode} onChange={e => onPeriodeChange(e.target.value)}>
          <option value="hari_ini">Hari ini</option>
          <option value="minggu_ini">Minggu ini</option>
          <option value="bulan_ini">Bulan ini</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-label">Filter Lokasi</span>
        <select className="filter-select" value={lokasi} onChange={e => onLokasiChange(e.target.value)}>
          <option value="semua">Semua Area</option>
          <option value="area_a">AREA A</option>
          <option value="area_b">AREA B</option>
          <option value="area_c">AREA C</option>
          <option value="gudang">Gudang</option>
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-label">Jenis Pelanggaran</span>
        <select className="filter-select" value={jenis} onChange={e => onJenisChange(e.target.value)}>
          <option value="semua">Semua</option>
          <option value="helm">Tidak Pakai Helm</option>
          <option value="rompi">Tidak Pakai Rompi</option>
        </select>
      </div>
    </div>
  );
}