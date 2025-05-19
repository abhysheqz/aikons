import React from "react";
const KeyframeAdd: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.342 5.68C7.79 5.305 8.32 5 9 5s1.211.304 1.658.68c.408.345.845.836 1.335 1.387l.045.05 2.642 2.97c.667.75 1.23 1.381 1.617 1.944.409.595.703 1.223.703 1.969s-.294 1.374-.703 1.97c-.388.562-.95 1.193-1.617 1.943l-2.687 3.02c-.49.55-.927 1.042-1.335 1.386C10.21 22.696 9.68 23 9 23s-1.211-.305-1.658-.68c-.408-.345-.845-.836-1.335-1.387l-2.687-3.02c-.667-.75-1.23-1.381-1.616-1.944C1.294 15.374 1 14.746 1 14s.294-1.374.704-1.97c.387-.562.949-1.193 1.616-1.943l.042-.047 2.6-2.922.045-.05c.49-.552.927-1.043 1.335-1.387"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 1a1 1 0 0 1 1 1v2.5H22a1 1 0 1 1 0 2h-2.5V9a1 1 0 1 1-2 0V6.5H15a1 1 0 1 1 0-2h2.5V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeAdd;
