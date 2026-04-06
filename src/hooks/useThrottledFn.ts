import { useRef, useCallback } from "react";

/**
 * 节流函数 - 限制函数在指定时间间隔内最多执行一次
 * @param fn 需要节流的函数
 * @param delay 节流间隔时间（毫秒）
 * @returns 节流后的函数
 */
export default function useThrottleFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  const lastRun = useRef(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        lastRun.current = now;
        fn(...args);
      }
    },
    [fn, delay]
  );
}