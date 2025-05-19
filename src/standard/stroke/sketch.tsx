import React from "react";
const Sketch: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9.5 12 3 7 9.5 12 21z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 4 22 9.5h-5m.5-5.5L17 9.5m.5-5.5L12 3 6.5 4M17 9.5H7M6.5 4 2 9.5h5M6.5 4 7 9.5M22 9.5 12 21 2 9.5"
      />
    </svg>
  );
};
export default Sketch;
