// Sidebar.jsx

const sidebarStyle = {
  width: 210,
  minHeight: "100vh",
  background: "linear-gradient(180deg, #1a2145 0%, #0f1630 100%)",
  display: "flex",
  flexDirection: "column",
  padding: "0",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 10,
};

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: "leave",
    label: "Leave",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
        <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="14" y="13" width="3" height="3" rx="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M2 20c0-4 3-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M19 14v-2M19 20v2M16 17h-2M22 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Sidebar({ active, setActive }) {
  return (
    <div style={sidebarStyle}>
      {/* Top user header */}
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "linear-gradient(135deg, #5b6ef5, #3b4dd4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 15, letterSpacing: 1,
          }}>HR</div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Employee</div>
            <div style={{ color: "#8899bb", fontSize: 12 }}>User</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "16px 10px" }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              width: "100%", padding: "11px 14px", borderRadius: 10,
              background: active === item.id ? "rgba(91,110,245,0.22)" : "transparent",
              border: "none", cursor: "pointer",
              color: active === item.id ? "#fff" : "#8899bb",
              fontWeight: active === item.id ? 600 : 400,
              fontSize: 15, marginBottom: 4,
              transition: "all 0.15s",
              borderLeft: active === item.id ? "3px solid #5b6ef5" : "3px solid transparent",
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom user */}
      <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "linear-gradient(135deg, #7c5cbf, #4f3a9e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 13,
          }}>RK</div>
          <div>
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Ram</div>
            <div style={{ color: "#8899bb", fontSize: 12 }}>Employee</div>
          </div>
        </div>
      </div>
    </div>
  );
}
