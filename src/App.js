import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // BrowserRouterで囲った中でルーティングが有効になる
    // 一番親コンポーネントのApp.jsで囲っておく
    <BrowserRouter>
      <div className="App">
        {/* link to で 指定したパスへのリンクを作成 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
