// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EventListPage from "./pages/EventListPage";
import EventDetailPage from "./pages/EventDetailPage";
import CustomerListPage from "./pages/CustomerListPage";

function App() {
  const [user, setUser] = useState(null); // null=未ログイン, {name, role}を保存

  return (
    <Router>
      <Routes>
        {/* ホームページ（ログイン前でも閲覧可能） */}
        <Route path="/home" element={<HomePage />} />

        {/* ログインページ */}
        <Route
          path="/login"
          element={
            user ? (
              user.role === "admin" ? (
                <Navigate to="/customers" /> // 管理者は顧客一覧ページへ
              ) : (
                <Navigate to="/" /> // 一般ユーザーはイベント一覧へ
              )
            ) : (
              <LoginPage onLogin={(userInfo) => setUser(userInfo)} />
            )
          }
        />

        {/* イベント一覧ページ（ログイン後のみ閲覧可能） */}
        <Route
          path="/"
          element={
            user ? (
              <EventListPage user={user} onLogout={() => setUser(null)} />
            ) : (
              <Navigate to="/home" /> // 未ログインはホームページへ
            )
          }
        />

        {/* イベント詳細ページ（ログイン後のみ閲覧可能） */}
        <Route
          path="/events/:id"
          element={user ? <EventDetailPage /> : <Navigate to="/login" />}
        />

        {/* 顧客一覧ページ（管理者のみ） */}
        <Route
          path="/customers"
          element={
            user?.role === "admin" ? (
              <CustomerListPage onLogout={() => setUser(null)} />
            ) : (
              <Navigate to="/" /> // 一般ユーザーはイベント一覧へ
            )
          }
        />

        {/* どのパスにもマッチしない場合はホームページへリダイレクト */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
