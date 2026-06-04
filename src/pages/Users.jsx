import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Users() {
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: "Sabita Khansa Dewi",
      username: "sabita",
      email: "sabita@gmail.com",
      role: "Supervisor",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Jofan Rizki",
      username: "jofan",
      email: "jofan@gmail.com",
      role: "Operator",
      status: "Active",
    },
  ]);

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    role: "Operator",
  });

  const handleAddUser = () => {
    if (
      !form.fullName ||
      !form.username ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      id: users.length + 1,
      fullName: form.fullName,
      username: form.username,
      email: form.email,
      role: form.role,
      status: "Active",
    };

    setUsers([...users, newUser]);

    setForm({
      fullName: "",
      username: "",
      email: "",
      password: "",
      role: "Operator",
    });

    setShowModal(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <div className="container-fluid p-3">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="fw-bold mb-1">
                👥 User Management
              </h2>
              <p className="text-muted mb-0">
                Manage system users and access permissions
              </p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              + Add User
            </button>
          </div>

          {/* SUMMARY CARD */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h6>Total Users</h6>
                  <h2 className="fw-bold">
                    {users.length}
                  </h2>
                  <small className="text-muted">
                    Registered accounts
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h6>Active Users</h6>
                  <h2 className="fw-bold text-success">
                    {
                      users.filter(
                        (u) => u.status === "Active"
                      ).length
                    }
                  </h2>
                  <small className="text-muted">
                    Currently active
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h6>Supervisors</h6>
                  <h2 className="fw-bold text-primary">
                    {
                      users.filter(
                        (u) => u.role === "Supervisor"
                      ).length
                    }
                  </h2>
                  <small className="text-muted">
                    System administrators
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="card shadow-sm border-0">
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">
                  User List
                </h5>

                <button className="btn btn-outline-primary btn-sm">
                  Export
                </button>
              </div>

              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>

                      <td>{user.fullName}</td>

                      <td>{user.username}</td>

                      <td>{user.email}</td>

                      <td>
                        <span
                          className={`badge ${
                            user.role === "Supervisor"
                              ? "bg-primary"
                              : "bg-secondary"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td>
                        <span className="badge bg-success">
                          {user.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            handleDelete(user.id)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
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
              width: "550px",
              background: "#fff",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <h4 className="mb-4">
              Add User
            </h4>

            <div className="mb-3">
              <label>Full Name</label>

              <input
                className="form-control"
                value={form.fullName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    fullName: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label>Username</label>

              <input
                className="form-control"
                value={form.username}
                onChange={(e) =>
                  setForm({
                    ...form,
                    username: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label>Email</label>

              <input
                className="form-control"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label>Password</label>

              <input
                type="password"
                className="form-control"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label>Role</label>

              <select
                className="form-select"
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role: e.target.value,
                  })
                }
              >
                <option value="Supervisor">
                  Supervisor
                </option>

                <option value="Operator">
                  Operator
                </option>
              </select>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  setShowModal(false)
                }
              >
                Cancel
              </button>

              <button
                className="btn btn-primary"
                onClick={handleAddUser}
              >
                Save User
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Users;