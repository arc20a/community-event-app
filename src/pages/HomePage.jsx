// src/pages/HomePage.jsx
import { events } from "../data/events";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #fffde7)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ヘッダー */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ color: "#2196f3" }}>市川市イベント管理システム</h1>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ログイン
        </button>
      </header>

      {/* 注目イベントバナー（文字入り） */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <img
          src="/assets/banner.jpg"
          alt="注目イベント"
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
        {/* バナー文字 */}
     <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
    textAlign: "center",
    lineHeight: "1.2",
    opacity: 0,
    animation: "fadeSlide 1s ease-out forwards",
  }}
>
  最新イベント情報をチェック！
</div>

{/* アニメーション用CSSをページ内に追加 */}
<style>
{`
  @keyframes fadeSlide {
    0% {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`}
</style>


      </div>

      {/* 説明文（2行） */}
      <div style={{ marginBottom: "30px", textAlign: "center", color: "#555", fontSize: "16px", lineHeight: "1.6" }}>
        市川市で開催するイベントをまとめたサイトになっています。<br />
        ※イベント参加にはログインが必要になります※
      </div>

      {/* 注目イベントカード一覧 */}
      <h2 style={{ color: "#333", marginBottom: "16px" }}>注目イベント</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => navigate(`/events/${event.id}`)}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }}
            />
            <h3 style={{ color: "#2196f3", marginBottom: "6px" }}>{event.title}</h3>
            <p style={{ color: "#555", marginBottom: "4px" }}>{event.date}</p>
            <p style={{ color: "#777" }}>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
