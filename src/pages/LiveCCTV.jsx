import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CCTVFeed from "../components/CCTVFeed";

function LiveCCTV() {
  const [showModal, setShowModal] = useState(false);
  const [namaArea, setNamaArea] = useState("");

  const [areas, setAreas] = useState([
    "CCTV Area 1",
    "CCTV Area 2",
    "CCTV Area 3",
    "CCTV Area 4",
  ]);

  const handleTambahArea = () => {
    if (!namaArea.trim()) {
      alert("Nama area harus diisi!");
      return;
    }

    setAreas([...areas, namaArea]);
    setNamaArea("");
    setShowModal(false);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <div className="container-fluid mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Live CCTV Monitoring</h4>

            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              + Tambah Area
            </button>
          </div>

          <div className="row mt-3">
            {areas.map((area, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <CCTVFeed title={area} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "450px",
              background: "#fff",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
            }}
          >
            <h4 className="mb-3">Tambah Area CCTV</h4>

            <div className="mb-3">
              <label className="form-label">
                Nama Area
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Contoh: Area Produksi"
                value={namaArea}
                onChange={(e) => setNamaArea(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowModal(false);
                  setNamaArea("");
                }}
              >
                Batal
              </button>

              <button
                className="btn btn-primary"
                onClick={handleTambahArea}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveCCTV;