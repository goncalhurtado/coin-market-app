import NavApp from "./components/navs/NavApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Crypto from "./pages/Crypto";
import News from "./pages/News";
import Community from "./pages/Community";
import React, { useState } from "react";
import Error from "./pages/Error";
import Feed from "./pages/Community/Feed";
import Trending from "./pages/Community/Trending";
import MyPage from "./pages/Community/MyPage";
import BannerCrypto from "./components/BannerCrypto";

function App() {
  const [search, setSearch] = useState([]);

  return (
    <>
      <NavApp setSearch={setSearch} />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={<Crypto search={search} setSearch={setSearch} />}
        />
        <Route path="/community/*" element={<Feed />} />
        <Route path="/community/trending" element={<Trending />} />
        <Route path="/community/mypage" element={<MyPage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
