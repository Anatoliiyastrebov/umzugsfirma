"use client";

import { useEffect } from "react";

const HOME_SCROLL_KEY = "nordumzug:scroll-home";

export function setHomeScrollFlag() {
  sessionStorage.setItem(HOME_SCROLL_KEY, "1");
}

export function HomeScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      if (sessionStorage.getItem(HOME_SCROLL_KEY) !== "1") return;
      sessionStorage.removeItem(HOME_SCROLL_KEY);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    scrollToTop();
    window.addEventListener("pageshow", scrollToTop);
    return () => window.removeEventListener("pageshow", scrollToTop);
  }, []);

  return null;
}
