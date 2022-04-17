import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
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
      {/* Switchでパスに応じて表示するコンポーネントを切り分ける */}
      <Switch>
        <Route exact path="/">
          {" "}
          {/* exact: 完全一致したパスを対象にする */}
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
