// src/pages/EventListPage.jsx
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";

function EventListPage({ user, onLogout }) {
  const navigate = useNavigate(); // ★重要

  return (
    <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#f0f8f5" }}>
      
      {/* 上部ボタン群 */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        {/* ログアウトボタン */}
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ログアウト
        </button>

        {/* 管理者専用ボタン */}
        {user?.role === "admin" && (
          <button
            onClick={() => navigate("/customers")}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            顧客一覧ページへ
          </button>
        )}
      </div>

      {/* タイトル */}
      <h2 style={{ color: "#2196f3", marginBottom: "20px", textAlign: "center" }}>
        地域イベント一覧
      </h2>

      {/* グリッドレイアウト */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventListPage;
