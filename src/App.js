import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./childArea";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onClickCountUp = () => setCount(count + 1);
  const onClickSetText = () => {};
  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
