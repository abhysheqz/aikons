import React from "react";
const StepOver: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 20.023h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20.002 14.059-3.013 2.984-2.996-2.97M3 17.02V4.12a.1.1 0 0 1 .1-.1h13.788a.1.1 0 0 1 .1.1V16.34"
      />
    </svg>
  );
};
export default StepOver;
