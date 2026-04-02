import { useEffect, useState, useRef } from "react";

/**
 * 对输入值做防抖，延迟后才返回最新值。
 * @param value 需要防抖的任意类型值
 * @param delay 防抖延迟时间（毫秒）
 * @returns 防抖后的值
 */
export default function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedvalue, setDebouncedValue] = useState(value);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [value]);

  return debouncedvalue;
}
