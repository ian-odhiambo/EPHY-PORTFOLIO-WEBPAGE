import { useEffect, useRef, useState } from "react";

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
};

export default useScrollReveal;
