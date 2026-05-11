import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CCTVFeed from "../components/CCTVFeed";

function LiveCCTV() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar />

        <div className="container-fluid mt-3">
          <h4>Live CCTV Monitoring</h4>

          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <CCTVFeed title="CCTV Area 1" />
            </div>
            <div className="col-md-6 mb-3">
              <CCTVFeed title="CCTV Area 2" />
            </div>
            <div className="col-md-6 mb-3">
              <CCTVFeed title="CCTV Area 3" />
            </div>
            <div className="col-md-6 mb-3">
              <CCTVFeed title="CCTV Area 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveCCTV;