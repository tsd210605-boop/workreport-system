import { useState } from "react";

const mockExercises = [
  {
    id: 1,
    title: "Bài tập 1: Biến và kiểu dữ liệu",
    subject: "Lập trình cơ bản",
    deadline: "20/03/2026",
    status: "Chưa nộp",
    difficulty: "Dễ",
    description: "Thực hành khai báo biến, các kiểu dữ liệu nguyên thủy trong JavaScript.",
  },
  {
    id: 2,
    title: "Bài tập 2: Vòng lặp & Điều kiện",
    subject: "Lập trình cơ bản",
    deadline: "22/03/2026",
    status: "Đã nộp",
    difficulty: "Dễ",
    description: "Viết chương trình sử dụng for, while, if-else để giải các bài toán đơn giản.",
  },
  {
    id: 3,
    title: "Bài tập 3: Mảng & Hàm",
    subject: "Lập trình cơ bản",
    deadline: "25/03/2026",
    status: "Chưa nộp",
    difficulty: "Trung bình",
    description: "Thao tác với mảng, viết hàm tái sử dụng và xử lý dữ liệu.",
  },
  {
    id: 4,
    title: "Bài tập 4: DOM Manipulation",
    subject: "Web Frontend",
    deadline: "28/03/2026",
    status: "Đang làm",
    difficulty: "Trung bình",
    description: "Thực hành thao tác với DOM, xử lý sự kiện click, input trong HTML.",
  },
  {
    id: 5,
    title: "Bài tập 5: API & Fetch",
    subject: "Web Frontend",
    deadline: "01/04/2026",
    status: "Chưa nộp",
    difficulty: "Khó",
    description: "Gọi REST API với fetch/axios, xử lý dữ liệu JSON và hiển thị lên giao diện.",
  },
  {
    id: 6,
    title: "Bài tập 6: React Components",
    subject: "React",
    deadline: "05/04/2026",
    status: "Chưa nộp",
    difficulty: "Khó",
    description: "Xây dựng các component React với props, state và hooks cơ bản.",
  },
];

const statusConfig = {
  "Chưa nộp":  { bg: "#fff0f0", color: "#e53e3e", dot: "#e53e3e" },
  "Đã nộp":    { bg: "#f0fff4", color: "#38a169", dot: "#38a169" },
  "Đang làm":  { bg: "#fffbeb", color: "#d97706", dot: "#d97706" },
};

const diffConfig = {
  "Dễ":       { bg: "#e0f2fe", color: "#0369a1" },
  "Trung bình": { bg: "#fef9c3", color: "#854d0e" },
  "Khó":      { bg: "#fce7f3", color: "#9d174d" },
};

const subjects = ["Tất cả", ...Array.from(new Set(mockExercises.map(e => e.subject)))];

export default function ExerciseList() {
  const [search, setSearch] = useState("");
  const [filterSubject, setFilterSubject] = useState("Tất cả");
  const [filterStatus, setFilterStatus] = useState("Tất cả");

  const filtered = mockExercises.filter(ex => {
    const matchSearch = ex.title.toLowerCase().includes(search.toLowerCase());
    const matchSubject = filterSubject === "Tất cả" || ex.subject === filterSubject;
    const matchStatus = filterStatus === "Tất cả" || ex.status === filterStatus;
    return matchSearch && matchSubject && matchStatus;
  });

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <p style={styles.headerSub}>Học kỳ 2 · 2025–2026</p>
          <h1 style={styles.headerTitle}>Danh sách bài tập</h1>
        </div>
        <div style={styles.headerStat}>
          <StatBox label="Tổng" value={mockExercises.length} color="#6366f1" />
          <StatBox label="Đã nộp" value={mockExercises.filter(e => e.status === "Đã nộp").length} color="#38a169" />
          <StatBox label="Chưa nộp" value={mockExercises.filter(e => e.status === "Chưa nộp").length} color="#e53e3e" />
        </div>
      </div>
      <div style={styles.filterBar}>
        <input
          style={styles.searchInput}
          placeholder="🔍  Tìm kiếm bài tập..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={styles.filterGroup}>
          {subjects.map(s => (
            <button
              key={s}
              style={{ ...styles.filterBtn, ...(filterSubject === s ? styles.filterBtnActive : {}) }}
              onClick={() => setFilterSubject(s)}
            >{s}</button>
          ))}
        </div>
        <div style={styles.filterGroup}>
          {["Tất cả", "Chưa nộp", "Đang làm", "Đã nộp"].map(s => (
            <button
              key={s}
              style={{ ...styles.filterBtn, ...(filterStatus === s ? styles.filterBtnActive : {}) }}
              onClick={() => setFilterStatus(s)}
            >{s}</button>
          ))}
        </div>
      </div>

      {/* List */}
      <div style={styles.list}>
        {filtered.length === 0 ? (
          <div style={styles.empty}>Không tìm thấy bài tập nào 😕</div>
        ) : (
          filtered.map(ex => <ExerciseCard key={ex.id} ex={ex} />)
        )}
      </div>
    </div>
  );
}

function ExerciseCard({ ex }) {
  const [open, setOpen] = useState(false);
  const st = statusConfig[ex.status];
  const diff = diffConfig[ex.difficulty];

  return (
    <div style={styles.card} onClick={() => setOpen(!open)}>
      <div style={styles.cardTop}>
        <div style={styles.cardLeft}>
          <span style={styles.cardId}>#{String(ex.id).padStart(2, "0")}</span>
          <div>
            <div style={styles.cardTitle}>{ex.title}</div>
            <div style={styles.cardSubject}>{ex.subject}</div>
          </div>
        </div>
        <div style={styles.cardRight}>
          <span style={{ ...styles.badge, background: diff.bg, color: diff.color }}>{ex.difficulty}</span>
          <span style={{ ...styles.badge, background: st.bg, color: st.color }}>
            <span style={{ ...styles.dot, background: st.dot }} />
            {ex.status}
          </span>
          <span style={styles.deadline}>📅 {ex.deadline}</span>
          <span style={styles.arrow}>{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {open && (
        <div style={styles.cardBody}>
          <p style={styles.cardDesc}>{ex.description}</p>
          <div style={styles.cardActions}>
            <button style={styles.btnPrimary}>Nộp bài</button>
            <button style={styles.btnSecondary}>Xem chi tiết</button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div style={{ ...styles.statBox, borderTop: `3px solid ${color}` }}>
      <div style={{ ...styles.statValue, color }}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "32px 24px",
    maxWidth: 860,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 28,
    flexWrap: "wrap",
    gap: 16,
  },
  headerSub: { margin: 0, color: "#94a3b8", fontSize: 13, fontWeight: 500, letterSpacing: 1 },
  headerTitle: { margin: "4px 0 0", fontSize: 28, fontWeight: 800, color: "#1e293b" },
  headerStat: { display: "flex", gap: 12 },
  statBox: {
    background: "#fff",
    borderRadius: 10,
    padding: "10px 18px",
    textAlign: "center",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  statValue: { fontSize: 22, fontWeight: 800 },
  statLabel: { fontSize: 11, color: "#94a3b8", marginTop: 2 },

  filterBar: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 },
  searchInput: {
    padding: "10px 16px",
    borderRadius: 10,
    border: "1.5px solid #e2e8f0",
    fontSize: 14,
    outline: "none",
    background: "#fff",
    color: "#1e293b",
  },
  filterGroup: { display: "flex", gap: 6, flexWrap: "wrap" },
  filterBtn: {
    padding: "6px 14px",
    borderRadius: 20,
    border: "1.5px solid #e2e8f0",
    background: "#fff",
    fontSize: 13,
    cursor: "pointer",
    color: "#64748b",
    fontWeight: 500,
    transition: "all 0.15s",
  },
  filterBtnActive: {
    background: "#6366f1",
    color: "#fff",
    borderColor: "#6366f1",
  },

  list: { display: "flex", flexDirection: "column", gap: 10 },
  empty: { textAlign: "center", padding: 48, color: "#94a3b8", fontSize: 15 },

  card: {
    background: "#fff",
    borderRadius: 12,
    border: "1.5px solid #e2e8f0",
    padding: "16px 20px",
    cursor: "pointer",
    transition: "box-shadow 0.15s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 },
  cardLeft: { display: "flex", alignItems: "center", gap: 14 },
  cardId: { fontSize: 13, fontWeight: 700, color: "#cbd5e1", minWidth: 28 },
  cardTitle: { fontWeight: 700, color: "#1e293b", fontSize: 15 },
  cardSubject: { fontSize: 12, color: "#94a3b8", marginTop: 2 },
  cardRight: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
  },
  dot: { width: 6, height: 6, borderRadius: "50%", display: "inline-block" },
  deadline: { fontSize: 12, color: "#94a3b8" },
  arrow: { fontSize: 11, color: "#cbd5e1", marginLeft: 4 },

  cardBody: {
    marginTop: 14,
    paddingTop: 14,
    borderTop: "1px dashed #e2e8f0",
  },
  cardDesc: { fontSize: 13, color: "#64748b", margin: "0 0 14px", lineHeight: 1.6 },
  cardActions: { display: "flex", gap: 8 },
  btnPrimary: {
    padding: "7px 18px",
    background: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "7px 18px",
    background: "#f1f5f9",
    color: "#475569",
    border: "none",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
};