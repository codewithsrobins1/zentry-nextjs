import React from "react";

interface ButtonProps {
  id?: string;
  title?: any;
  leftIcon?: any;
  rightIcon?: any;
  containerClass?: any;
  onClick?: any;
}

const Button = ({
  id,
  title,
  leftIcon,
  containerClass,
  onClick,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      onClick={onClick}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
