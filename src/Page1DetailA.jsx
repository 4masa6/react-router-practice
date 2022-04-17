import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // ルーティングでpathと一緒にstateを渡すと、useLocationから取得できる
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1DetailAページです</h1>
    </div>
  );
};
