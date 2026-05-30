// RecruitmentModule.jsx
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    dept: "Engineering",
    deptColor: "#b8f5c8",
    deptText: "#1a7a3a",
    type: "Full-Time (Remote)",
    posted: "13 May",
  },
  {
    id: 2,
    title: "Product Designer",
    dept: "Design",
    deptColor: "#fbc4c4",
    deptText: "#a03030",
    type: "Full-Time (Offline)",
    posted: "8 May",
  },
  {
    id: 3,
    title: "Data Scientist",
    dept: "Analytics",
    deptColor: "#d9d0f7",
    deptText: "#5a3aa0",
    type: "Full-Time (Hyderabad)",
    posted: "3 May",
  },
  {
    id: 4,
    title: "HR Specialist",
    dept: "HR",
    deptColor: "#c4e3fb",
    deptText: "#1a5a8a",
    type: "Full-Time (Chennai)",
    posted: "1 May",
  },
];

const deptCounts = { Engineering: 2, Product: 0, Design: 1, Analytics: 0, HR: 1 };
const deptColors = {
  Engineering: "#fde8e8",
  Product: "#d4f5ef",
  Design: "#fef9c3",
  Analytics: "#ede8ff",
  HR: "#dbeafe",
};

const depts = ["All", "Engineering", "Design", "Analytics", "HR"];

export default function RecruitmentModule() {
  const [tab, setTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = jobs.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase());
    const matchDept = filter === "All" || j.dept === filter;
    return matchSearch && matchDept;
  });

  return (
    <div style={{ padding: "36px 40px", maxWidth: 900 }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, color: "#1a2145", marginBottom: 20 }}>
        Recruitment
      </h1>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 24, borderBottom: "2px solid #e5e8f0", marginBottom: 28 }}>
        {["overview", "jobopenings"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              paddingBottom: 10, fontSize: 15, fontWeight: 500,
              color: tab === t ? "#1a2145" : "#8899bb",
              borderBottom: tab === t ? "2.5px solid #3cb87a" : "2.5px solid transparent",
              marginBottom: -2,
            }}
          >
            {t === "overview" ? "Overview" : "Job openings"}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW TAB ── */}
      {tab === "overview" && (
        <>
          {/* Active openings card */}
          <div style={{
            display: "inline-block", background: "#fff",
            border: "1px solid #e8eaf5", borderRadius: 12,
            padding: "18px 32px", marginBottom: 32,
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}>
            <div style={{ color: "#555", fontWeight: 500, fontSize: 14 }}>Active Openings</div>
            <div style={{ color: "#3cb87a", fontWeight: 800, fontSize: 32, lineHeight: 1.2 }}>4</div>
            <div style={{ color: "#888", fontSize: 13 }}>Currently Hiring</div>
          </div>

          {/* Search + Filter */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke="#aaa" strokeWidth="2" />
                  <path d="m16.5 16.5 4 4" stroke="#aaa" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Job..."
                style={{
                  paddingLeft: 36, paddingRight: 14, paddingTop: 9, paddingBottom: 9,
                  borderRadius: 8, border: "1.5px solid #e0e3ee", fontSize: 14, width: 210, outline: "none",
                }}
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                padding: "9px 14px", borderRadius: 8,
                border: "1.5px solid #e0e3ee", fontSize: 14, background: "#fff", cursor: "pointer",
              }}
            >
              {depts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* Job Cards */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 36 }}>
            {filtered.map((job) => (
              <div key={job.id} style={{
                background: "#f2f3f7", borderRadius: 12, padding: "18px 20px",
                width: 240, boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1a2145", marginBottom: 8 }}>
                  {job.title}
                </div>
                <span style={{
                  background: job.deptColor, color: job.deptText,
                  borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600,
                  display: "inline-block", marginBottom: 10,
                }}>
                  {job.dept}
                </span>
                <div style={{ fontSize: 13, color: "#555" }}><b>Type:</b> {job.type}</div>
                <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}><b>Posted:</b> {job.posted}</div>
              </div>
            ))}
          </div>

          {/* Open positions by department */}
          <div style={{
            background: "#fff", borderRadius: 14, padding: "24px 28px",
            border: "1px solid #e8eaf5",
          }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#1a2145", marginBottom: 16 }}>
              Open positions by department
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {Object.entries(deptCounts).map(([dept, count]) => (
                <div key={dept} style={{
                  background: deptColors[dept], borderRadius: 10,
                  padding: "10px 22px", textAlign: "center", minWidth: 90,
                }}>
                  <div style={{ fontSize: 13, color: "#555" }}>{dept}</div>
                  <div style={{ fontWeight: 700, fontSize: 20, color: "#1a2145" }}>{count}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── JOB OPENINGS TAB ── */}
      {tab === "jobopenings" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {jobs.map((job) => (
            <div key={job.id} style={{
              background: "#f2f3f7", borderRadius: 12, padding: "18px 24px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#1a2145" }}>{job.title}</div>
                <span style={{
                  background: job.deptColor, color: job.deptText,
                  borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 600,
                  display: "inline-block", marginTop: 4,
                }}>
                  {job.dept}
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, color: "#555" }}>{job.type}</div>
                <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>Posted: {job.posted}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
