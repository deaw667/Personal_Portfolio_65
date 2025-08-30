import { useState, useEffect, useRef } from "react";

export default function Typewriter({ text, speed = 40 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
         
          setDisplayed("");
          setIndex(0);
        }
      },
      { threshold: 0.4 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <p ref={ref} className="typewriter-cursor">{displayed}</p>;
}
