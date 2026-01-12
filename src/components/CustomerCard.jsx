// src/components/CustomerCard.jsx
function CustomerCard({ customer }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ marginBottom: "8px", color: "#2196f3" }}>{customer.name}</h3>
      <p style={{ marginBottom: "4px", color: "#555" }}>年齢: {customer.age}</p>
      <p style={{ marginBottom: "4px", color: "#555" }}>メール: {customer.email}</p>
      <p style={{ color: "#555" }}>電話: {customer.phone}</p>
    </div>
  );
}

export default CustomerCard;
