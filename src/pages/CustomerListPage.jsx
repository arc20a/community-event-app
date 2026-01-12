// src/pages/CustomerListPage.jsx
import { customers } from "../data/customers";
import { useNavigate } from "react-router-dom";

function CustomerListPage({ onLogout }) {
  const navigate = useNavigate(); // ← 追加

  return (
    <div style={{ padding: "20px" }}>
      {/* 上部ボタンエリア */}
      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            marginRight: "8px",
            padding: "6px 12px",
            backgroundColor: "#9e9e9e",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ← イベント一覧へ戻る
        </button>

        <button
          onClick={onLogout}
          style={{
            padding: "6px 12px",
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ログアウト
        </button>
      </div>

      <h2>顧客一覧（管理者専用）</h2>

      {customers.map((c) => (
        <div
          key={c.id}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "8px 0",
          }}
        >
          <p>名前：{c.name}</p>
          <p>メール：{c.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerListPage;
