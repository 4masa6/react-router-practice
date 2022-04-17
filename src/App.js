import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
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
        {/* renderはデフォルトでpropsを受け取り、matchの中のurlにパス情報が入っている */}
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route exact path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route exact path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
