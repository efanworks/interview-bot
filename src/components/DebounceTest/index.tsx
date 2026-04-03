import { useState } from "react";
import useDebouncedFn from "../../hooks/useDebouncedFn";
import styles from "./style.module.scss";

export default function DebounceTest() {
  const [count, setCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<string>("");

  const debouncedFn = useDebouncedFn(() => {
    setCount((c) => c + 1);
    setLastClickTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className={styles.container}>
      <button onClick={debouncedFn}>点击测试防抖</button>
      <p>函数执行次数: {count}</p>
      <p>上次执行时间: {lastClickTime || "未执行"}</p>
    </div>
  );
}