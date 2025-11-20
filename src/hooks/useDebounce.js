import { useCallback, useRef } from "react";

export const useDebounce = function (callbackFunc, delay) {
  const ref = useRef(null);
  return useCallback(
    (...args) => {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => callbackFunc(...args), delay);
    },
    [callbackFunc, delay],
  );
};
