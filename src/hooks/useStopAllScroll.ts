import { useEffect } from "react";

interface StopAllScrollProps {
  condition: boolean;
}

export function useStopAllScroll({ condition }: StopAllScrollProps) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [condition]);
}
