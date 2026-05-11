import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ViolationTable from "../components/Violationtable";

export default function Report() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-grow-1">

        <Navbar />

        <div className="container-fluid mt-3">

          {/* 🔥 HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: 4 }}>
                📊 Laporan Pelanggaran
              </h4>
              <span style={{ fontSize: 13, color: "#6b7280" }}>
                Monitoring & Rekap Data Pelanggaran CCTV (YOLO Detection)
              </span>
            </div>

            <button className="btn btn-primary">
              ⬇ Export Laporan
            </button>
          </div>

          {/* 🔍 FILTER BAR */}
          <div className="card p-3 mb-4 shadow-sm" style={{ borderRadius: 12 }}>
            <div className="row">

              <div className="col-md-3">
                <label className="form-label">Tanggal</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-3">
                <label className="form-label">Lokasi</label>
                <select className="form-select">
                  <option>Semua</option>
                  <option>AREA A</option>
                  <option>AREA B</option>
                  <option>Gudang</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Jenis</label>
                <select className="form-select">
                  <option>Semua</option>
                  <option>Tidak Pakai Helm</option>
                  <option>Tidak Pakai Rompi</option>
                </select>
              </div>

              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-secondary w-100">
                  Reset Filter
                </button>
              </div>

            </div>
          </div>

          {/* 📊 SUMMARY CARDS */}
          <div className="row mb-4">

            <div className="col-md-4">
              <div className="card p-3 shadow-sm" style={{ borderRadius: 12 }}>
                <h6>Total Pelanggaran</h6>
                <h3 style={{ fontWeight: 800 }}>128</h3>
                <span style={{ fontSize: 12, color: "#6b7280" }}>
                  +12% dari kemarin
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow-sm" style={{ borderRadius: 12 }}>
                <h6>Sudah Ditindak</h6>
                <h3 className="text-success" style={{ fontWeight: 800 }}>
                  90
                </h3>
                <span style={{ fontSize: 12, color: "#6b7280" }}>
                  70% selesai
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow-sm" style={{ borderRadius: 12 }}>
                <h6>Belum Ditindak</h6>
                <h3 className="text-danger" style={{ fontWeight: 800 }}>
                  38
                </h3>
                <span style={{ fontSize: 12, color: "#6b7280" }}>
                  perlu ditindak
                </span>
              </div>
            </div>

          </div>

          {/* 📋 TABLE (PAKAI COMPONENT LU) */}
          <div className="card p-3 shadow-sm" style={{ borderRadius: 12 }}>
            <ViolationTable />
          </div>

        </div>
      </div>
    </div>
  );
}