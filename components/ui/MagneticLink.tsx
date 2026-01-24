"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  delay?: number;
  className?: string;
}

export default function MagneticLink({
  children,
  href,
  delay = 0,
  className,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        x: position.x,
      }}
      style={{ y: position.y }}
      transition={{ delay, type: "spring", stiffness: 150 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={cn(
        "text-slate-300 hover:text-white transition-colors cursor-pointer",
        className
      )}
    >
      {children}
    </motion.a>
  );
}
