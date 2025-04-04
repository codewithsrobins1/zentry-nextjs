import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedTitle {
  title: string;
  sectionId?: string;
  containerClass?: string;
}

export const AnimatedTitle = ({
  title,
  sectionId,
  containerClass,
}: AnimatedTitle) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set a context to scope animations to current instance of component
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title ${containerClass} max-w`}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word special-font font-zentry font-black opacity-0;"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
