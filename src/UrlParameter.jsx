import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation(); // useLocationのsearchにクエリパラメータが入ってくる
  const query = new URLSearchParams(search); // URLSearchParamsの引数に?以降の文字列を入れると、様々なメソッドが使えるようになる
  console.log(query);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーター：{id}</p>
      <p>クエリパラメーター：{query.get("name")}</p>
    </div>
  );
};
