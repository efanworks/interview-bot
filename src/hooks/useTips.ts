import { useState } from "react";

type TipsStore = {
  count: number;
  firstCloseTime: number;
};

const KEY = "userId2026";
const DAY_MS = 24 * 60 * 60 * 1000;

function readStore(): TipsStore {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<TipsStore>) : {};
    return {
      count: parsed.count ?? 0,
      firstCloseTime: parsed.firstCloseTime ?? 0
    };
  } catch {
    return { count: 0, firstCloseTime: 0 };
  }
}

export function useTips(times: number, days: number) {
  const windowMs = days * DAY_MS;

  const getIsShow = () => {
    const { count, firstCloseTime } = readStore();
    if (firstCloseTime === 0) return true;
    if (Date.now() - firstCloseTime > windowMs) return true;
    return count < times;
  };

  const [isShow, setIsShow] = useState(getIsShow);

  const close = () => {
    const now = Date.now();
    const { count, firstCloseTime } = readStore();
    const expired = firstCloseTime === 0 || now - firstCloseTime > windowMs;

    const next: TipsStore = expired
      ? { count: 1, firstCloseTime: now }
      : { count: count + 1, firstCloseTime };

    localStorage.setItem(KEY, JSON.stringify(next));
    setIsShow(false);
  };

  return [isShow, close] as const;
}
