import { useState, useEffect, useRef } from "react";

export default function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setVal(target);
            clearInterval(timer);
          } else {
            setVal(Math.floor(start));
          }
        }, 16);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ color: "#ef4444", fontWeight: 800, fontSize: "2rem" }}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
