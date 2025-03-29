import React, { useEffect, useRef } from "react";

interface AnimatedTitle {
  title: string;
  containerClass: string;
}

export const AnimatedTitle = ({ title, containerClass }: AnimatedTitle) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set a context to scope animations to current instance of component
    const context = gsap.context(() => {}, containerRef);
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
