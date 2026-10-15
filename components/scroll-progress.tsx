"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const progress = maximum === 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / maximum));
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    observer?.observe(document.documentElement);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();
    return () => { if (frame) cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [pathname]);
  return <div className="scroll-progress" aria-hidden="true"><div ref={barRef} /></div>;
}
