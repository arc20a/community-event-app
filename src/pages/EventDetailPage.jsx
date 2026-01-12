// src/pages/EventDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events";

function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <div>イベントが見つかりません</div>;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f8f5",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {/* 戻るボタン */}
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "10px",
            marginRight: "10px",
          }}
        >
          ← 戻る
        </button>


        {/* タイトル */}
        <h1 style={{ color: "#2196f3", marginBottom: "16px" }}>{event.title}</h1>

        {/* イベント画像 */}
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "12px",
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
        )}

        {/* 日付と場所 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#555" }}>
            📅 {event.date}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#555" }}>
            📍 {event.location}
          </div>
        </div>

        {/* 詳細テキスト */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            marginBottom: "20px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          {event.description}
        </div>

        {/* 参加ボタン */}
        <button
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={() => alert("参加申し込みが完了しました！")}
        >
          参加する
        </button>
      </div>
    </div>
  );
}

export default EventDetailPage;

