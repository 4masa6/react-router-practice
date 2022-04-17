import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  // historyのpushメソッドに遷移先のパスを指定することで、JavaScriptで遷移ができる
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* Link to のリンク先にオブジェクトでpathとstateを渡す */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
