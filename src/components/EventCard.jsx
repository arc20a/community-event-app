import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/events/${event.id}`)}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden", // 画像がはみ出さないように
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        marginBottom: "16px",
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
      {/* 画像 */}
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />
      )}

      {/* タイトル・日付・場所 */}
      <div style={{ padding: "16px" }}>
        <h3 style={{ marginBottom: "8px", color: "#2196f3" }}>{event.title}</h3>
        <p style={{ marginBottom: "4px", color: "#555" }}>📅 {event.date}</p>
        <p style={{ color: "#777" }}>📍 {event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
