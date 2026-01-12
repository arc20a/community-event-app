import { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [isHover, setIsHover] = useState(false); // ★ホバー状態管理

  // ★ 管理者ユーザー定義
  const adminUsers = ["admin", "manager"];
  const isAdmin = adminUsers.includes(username);

  const handleLogin = () => {
    const role = isAdmin ? "admin" : "user";

    onLogin({
      name: username,
      role: role,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #2196f3, #21cbf3)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        {/* アイコン */}
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 16px",
            borderRadius: "50%",
            backgroundColor: "#2196f3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          🗓️
        </div>

        {/* タイトル */}
        <h2 style={{ marginBottom: "8px", color: "#333" }}>
          市川市イベント管理システム
        </h2>

        {/* サブタイトル */}
        <p style={{ marginBottom: "24px", color: "#666", fontSize: "14px" }}>
          ログインしてイベントを確認しましょう
        </p>

        {/* ユーザー名入力 */}
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* ★ 管理者ログイン表示 */}
        {isAdmin && (
          <p
            style={{
              marginBottom: "12px",
              color: "#d32f2f",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            管理者としてログインします
          </p>
        )}

        {/* ログインボタン（ホバーアニメーション付き） */}
        <button
          onClick={handleLogin}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: isHover ? "#1976d2" : "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: isHover
              ? "0 6px 16px rgba(0,0,0,0.25)"
              : "0 4px 8px rgba(0,0,0,0.15)",
            transition: "all 0.2s ease",
          }}
        >
          ログイン
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
