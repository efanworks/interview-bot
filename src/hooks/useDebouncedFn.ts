import { useRef, useCallback } from "react";

/**
 * 对函数做防抖，返回一个防抖版本的函数。
 * @param fn 需要防抖的函数
 * @param delay 防抖延迟时间（毫秒）
 * @returns 防抖后的函数
 */
export default function useDebouncedFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFn;
}