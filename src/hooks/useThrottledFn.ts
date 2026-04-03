import { useRef, useCallback } from "react";

/**
 * 对函数做节流，返回一个节流版本的函数。
 * @param fn 需要节流的函数
 * @param delay 节流间隔时间（毫秒）
 * @returns 节流后的函数
 */
export default function useThrottledFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  const lastRun = useRef<number>(0);

  const throttledFn = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        lastRun.current = now;
        fn(...args);
      }
    },
    [fn, delay]
  );

  return throttledFn;
}