import { useCallback, useRef } from "react";

export const useDebounce = function <T extends any[]>(
  callbackFunc: (...args: T) => void,
  delay: number,
) {
  const ref = useRef(null);
  return useCallback(
    (...args: T) => {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => callbackFunc(...args), delay);
    },
    [callbackFunc, delay],
  );
};
