import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StartCard from "../components/StartCard";
import TrendChart from "../components/TrendChart";
import DonutChart from "../components/DonutChart";
import ViolationTable from "../components/Violationtable";
import Filterbar from "../components/Filterbar";

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar />

        <div className="container-fluid mt-3">
          <Filterbar />

          {/* Cards */}
          <div className="row">
            <div className="col-md-3">
              <StartCard title="Total Pelanggaran" value="120" />
            </div>
            <div className="col-md-3">
              <StartCard title="Hari Ini" value="15" />
            </div>
            <div className="col-md-3">
              <StartCard title="CCTV Aktif" value="8" />
            </div>
            <div className="col-md-3">
              <StartCard title="Area Terpantau" value="5" />
            </div>
          </div>

          {/* Charts */}
          <div className="row mt-4">
            <div className="col-md-8">
              <TrendChart />
            </div>
            <div className="col-md-4">
              <DonutChart />
            </div>
          </div>

          {/* Table */}
          <div className="mt-4">
            <ViolationTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;