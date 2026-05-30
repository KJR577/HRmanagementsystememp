// LeaveModule.jsx
import { useState } from "react";

const inputStyle = {
  border: "1.5px solid #d0d5e8",
  borderRadius: 6,
  padding: "7px 12px",
  fontSize: 14,
  color: "#333",
  background: "#fff",
  outline: "none",
  width: 160,
};

export default function LeaveModule() {
  const [type, setType] = useState("SL");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const calcDays = () => {
    if (!from || !to) return "";
    const d1 = new Date(from), d2 = new Date(to);
    const diff = Math.ceil((d2 - d1) / 86400000) + 1;
    return diff > 0 ? diff : "";
  };

  const handleSubmit = () => {
    if (!from || !to || !reason) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", minHeight: "80vh",
    }}>
      {/* Form card */}
      <div style={{
        background: "rgba(220,225,255,0.55)",
        borderRadius: 22,
        padding: "40px 56px 36px",
        width: 520,
        boxShadow: "0 4px 32px rgba(91,110,245,0.08)",
      }}>
        <h2 style={{
          textAlign: "center", color: "#2d3580",
          fontWeight: 700, fontSize: 26, marginBottom: 32, letterSpacing: 0.2,
        }}>
          Leave Request Form
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Type */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <label style={{ width: 110, textAlign: "right", color: "#4455aa", fontWeight: 500, fontSize: 15 }}>
              Type :
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{ ...inputStyle, width: 80 }}
            >
              <option value="SL">SL</option>
              <option value="LL">LL</option>
              <option value="ML">ML</option>
            </select>
          </div>

          {/* From */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <label style={{ width: 110, textAlign: "right", color: "#4455aa", fontWeight: 500, fontSize: 15 }}>
              From:
            </label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* To */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <label style={{ width: 110, textAlign: "right", color: "#4455aa", fontWeight: 500, fontSize: 15 }}>
              To:
            </label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* No. of Days */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <label style={{ width: 110, textAlign: "right", color: "#4455aa", fontWeight: 500, fontSize: 15 }}>
              No.of.Days:
            </label>
            <input
              value={calcDays()}
              readOnly
              style={{ ...inputStyle, background: "#eef0fa", color: "#555" }}
            />
          </div>

          {/* Reason */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <label style={{
              width: 110, textAlign: "right", color: "#4455aa",
              fontWeight: 500, fontSize: 15, paddingTop: 6,
            }}>
              Reason:
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={6}
              style={{ ...inputStyle, width: 280, resize: "vertical", fontFamily: "inherit" }}
            />
          </div>

        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        style={{
          marginTop: 28,
          background: submitted ? "#3cb87a" : "#3b3d8f",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          padding: "13px 64px",
          fontSize: 17,
          fontWeight: 600,
          cursor: "pointer",
          letterSpacing: 0.5,
          transition: "background 0.2s",
          boxShadow: "0 4px 18px rgba(59,61,143,0.3)",
        }}
      >
        {submitted ? "✓ Submitted!" : "Submit"}
      </button>

      {/* Legend */}
      <div style={{ marginTop: 18, display: "flex", gap: 32 }}>
        <span style={{ color: "#e05", fontSize: 13 }}>SL - Short Leave</span>
        <span style={{ color: "#1a7dc4", fontSize: 13 }}>LL - Long Leave</span>
        <span style={{ color: "#888", fontSize: 13 }}>ML - Medical Leave</span>
      </div>
    </div>
  );
}
