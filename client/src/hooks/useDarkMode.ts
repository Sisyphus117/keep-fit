import { useState, useEffect } from "react";

const useDarkMode = () => {
  const mediaQueryString = "(prefers-color-scheme: dark)";

  const getInitialState = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia(mediaQueryString).matches;
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialState);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return { isDarkMode };
};

export default useDarkMode;
