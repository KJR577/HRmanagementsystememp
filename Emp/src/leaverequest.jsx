import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Sora:wght@400;600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #eef0f7;
  }

  .app {
    display: flex;
    min-height: 100vh;
    background: #eef0f7;
  }

  /* Sidebar */
  .sidebar {
    width: 220px;
    min-height: 100vh;
    background: linear-gradient(170deg, #1a2455 0%, #1e3a8a 60%, #1e3a6a 100%);
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
  }

  .sidebar::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    pointer-events: none;
  }

  .sidebar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 20px 28px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin-bottom: 16px;
  }

  .logo-badge {
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.15);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #fff;
    letter-spacing: 0.5px;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .logo-text {
    display: flex; flex-direction: column;
  }

  .logo-name {
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
  }

  .logo-role {
    font-size: 11px;
    color: rgba(255,255,255,0.5);
    font-weight: 300;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 12px;
    flex: 1;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: rgba(255,255,255,0.55);
    font-size: 13.5px;
    font-weight: 400;
    user-select: none;
  }

  .nav-item:hover {
    background: rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.85);
  }

  .nav-item.active {
    background: rgba(255,255,255,0.13);
    color: #fff;
    font-weight: 500;
  }

  .nav-icon {
    width: 18px; height: 18px;
    opacity: 0.9;
    flex-shrink: 0;
  }

  .sidebar-footer {
    padding: 16px 20px 0 20px;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin-top: 16px;
    display: flex; align-items: center; gap: 10px;
  }

  .avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Sora', sans-serif;
    font-size: 12px; font-weight: 600;
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.25);
    flex-shrink: 0;
  }

  .footer-info { display: flex; flex-direction: column; }
  .footer-name { font-size: 13px; font-weight: 500; color: #fff; line-height: 1.2; }
  .footer-role { font-size: 11px; color: rgba(255,255,255,0.45); font-weight: 300; }

  /* Main Content */
  .main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
  }

  .form-card {
    background: rgba(205, 212, 240, 0.65);
    backdrop-filter: blur(12px);
    border-radius: 20px;
    padding: 40px 48px 36px 48px;
    width: 100%;
    max-width: 520px;
    box-shadow: 0 4px 32px rgba(30,58,138,0.08);
    border: 1px solid rgba(255,255,255,0.5);
  }

  .form-title {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #1e2d6b;
    text-align: center;
    margin-bottom: 32px;
    letter-spacing: -0.3px;
  }

  .form-row {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 18px;
  }

  .form-label {
    font-size: 13.5px;
    font-weight: 500;
    color: #2c3e7a;
    min-width: 90px;
    padding-top: 9px;
    flex-shrink: 0;
  }

  .form-control {
    flex: 1;
  }

  .input, .select, .textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1.5px solid rgba(255,255,255,0.7);
    border-radius: 8px;
    background: rgba(255,255,255,0.75);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: #1e2d6b;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    -webkit-appearance: none;
  }

  .input:focus, .select:focus, .textarea:focus {
    border-color: #3b5bdb;
    box-shadow: 0 0 0 3px rgba(59,91,219,0.12);
    background: #fff;
  }

  .input::placeholder, .textarea::placeholder {
    color: #a0aec0;
  }

  .select-wrap {
    position: relative;
  }

  .select-wrap::after {
    content: '▾';
    position: absolute;
    right: 10px; top: 50%;
    transform: translateY(-50%);
    color: #3b5bdb;
    font-size: 12px;
    pointer-events: none;
  }

  .textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.5;
  }

  .days-input {
    max-width: 100px;
  }

  .submit-wrap {
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }

  .btn-submit {
    background: linear-gradient(135deg, #2d47b5 0%, #1e3a8a 100%);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 11px 56px;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.3px;
    transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
    box-shadow: 0 4px 16px rgba(30,58,138,0.28);
  }

  .btn-submit:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(30,58,138,0.36);
  }

  .btn-submit:active {
    transform: translateY(0);
  }

  .legend {
    display: flex;
    justify-content: space-around;
    margin-top: 22px;
    padding-top: 16px;
  }

  .legend-item {
    font-size: 11.5px;
    color: #c0392b;
    font-weight: 500;
    opacity: 0.85;
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 28px; left: 50%;
    transform: translateX(-50%) translateY(80px);
    background: #1e3a8a;
    color: #fff;
    padding: 12px 28px;
    border-radius: 40px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 8px 24px rgba(30,58,138,0.35);
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    z-index: 999;
    pointer-events: none;
  }

  .toast.show {
    transform: translateX(-50%) translateY(0);
  }
`;

const NAV_ITEMS = [
  {
    label: "Dashboard",
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
  },
  {
    label: "Leave",
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
  },
  {
    label: "Recruitment",
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3"/>
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
        <path d="M16 11l2 2 4-4"/>
      </svg>
    ),
  },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Leave");
  const [leaveType, setLeaveType] = useState("SL");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [numDays, setNumDays] = useState("");
  const [reason, setReason] = useState("");
  const [toast, setToast] = useState(false);

  // Auto-calculate number of days
  useEffect(() => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      if (!isNaN(from) && !isNaN(to) && to >= from) {
        const diff = Math.round((to - from) / (1000 * 60 * 60 * 24)) + 1;
        setNumDays(String(diff));
      } else {
        setNumDays("");
      }
    }
  }, [fromDate, toDate]);

  const handleSubmit = () => {
    if (!fromDate || !toDate || !reason.trim()) {
      alert("Please fill in all required fields.");
      return;
    }
    setToast(true);
    setTimeout(() => setToast(false), 2800);
    setFromDate(""); setToDate(""); setNumDays(""); setReason(""); setLeaveType("SL");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="logo-badge">HR</div>
            <div className="logo-text">
              <span className="logo-name">Employee</span>
              <span className="logo-role">User</span>
            </div>
          </div>

          <nav className="nav">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`nav-item${activeNav === item.label ? " active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="avatar">RK</div>
            <div className="footer-info">
              <span className="footer-name">Ram</span>
              <span className="footer-role">Employee</span>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="main">
          <div>
            <div className="form-card">
              <h1 className="form-title">Leave Request Form</h1>

              {/* Type */}
              <div className="form-row">
                <label className="form-label">Type :</label>
                <div className="form-control">
                  <div className="select-wrap" style={{ maxWidth: 90 }}>
                    <select
                      className="select"
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                    >
                      <option value="SL">SL</option>
                      <option value="LL">LL</option>
                      <option value="ML">ML</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* From */}
              <div className="form-row">
                <label className="form-label">From:</label>
                <div className="form-control">
                  <input
                    type="date"
                    className="input"
                    style={{ maxWidth: 160 }}
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
              </div>

              {/* To */}
              <div className="form-row">
                <label className="form-label">To:</label>
                <div className="form-control">
                  <input
                    type="date"
                    className="input"
                    style={{ maxWidth: 160 }}
                    value={toDate}
                    min={fromDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>

              {/* No. of Days */}
              <div className="form-row">
                <label className="form-label">No.of.Days:</label>
                <div className="form-control">
                  <input
                    type="number"
                    className="input days-input"
                    value={numDays}
                    readOnly
                    placeholder="—"
                    min={1}
                  />
                </div>
              </div>

              {/* Reason */}
              <div className="form-row" style={{ alignItems: "flex-start" }}>
                <label className="form-label" style={{ paddingTop: 9 }}>Reason:</label>
                <div className="form-control">
                  <textarea
                    className="textarea"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter your reason..."
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="submit-wrap">
                <button className="btn-submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="legend">
              <span className="legend-item">SL - Short Leave</span>
              <span className="legend-item">LL - Long Leave</span>
              <span className="legend-item">ML - Medical Leave</span>
            </div>
          </div>
        </main>
      </div>

      {/* Toast */}
      <div className={`toast${toast ? " show" : ""}`}>
        ✓ Leave request submitted successfully!
      </div>
    </>
  );
}