// App.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import LeaveModule from "./Leaverequest";
import RecruitmentModule from "./Recruitment";

export default function App() {
  const [active, setActive] = useState("leave");

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#f5f6fa",
    }}>
      <Sidebar active={active} setActive={setActive} />

      <main style={{ marginLeft: 210, flex: 1, minHeight: "100vh" }}>
        {active === "dashboard" && (
          <div style={{ padding: 48, color: "#1a2145" }}>
            <h1 style={{ fontWeight: 700, fontSize: 32 }}>Dashboard</h1>
            <p style={{ color: "#888", marginTop: 12 }}>
              Welcome back, Ram! Select a module from the sidebar.
            </p>
          </div>
        )}
        {active === "leave" && <LeaveModule />}
        {active === "recruitment" && <RecruitmentModule />}
      </main>
    </div>
  );
}
