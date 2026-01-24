"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import type { UseInViewOptions } from "framer-motion";

/**
 * Like framer-motion's `useInView`, but never leaves content invisible forever.
 *
 * In some environments (certain webviews, aggressive privacy settings, etc.)
 * IntersectionObserver callbacks can fail to fire, leaving components stuck in
 * their "hidden" animation state. This hook flips to `true` after a short
 * fallback delay so the UI remains usable.
 */
export function useInViewFallback<T extends Element>(
  ref: RefObject<T | null>,
  options?: UseInViewOptions & { fallbackMs?: number }
): boolean {
  const { fallbackMs = 250, ...inViewOptions } = options ?? {};
  const inView = useInView(ref as unknown as RefObject<Element>, inViewOptions);
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setFallbackVisible(false);
      return;
    }

    // If IntersectionObserver is not available or never fires, don't keep content hidden.
    const id = window.setTimeout(() => setFallbackVisible(true), fallbackMs);
    return () => window.clearTimeout(id);
  }, [inView, fallbackMs]);

  return inView || fallbackVisible;
}

