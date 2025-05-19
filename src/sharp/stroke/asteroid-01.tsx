import React from "react";
const Asteroid_01: React.FC<
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
        d="m2 15 2-8 5.5-2.5 4 6c.268-.098 3.494-1.98 4-2.5l3.5 6-2.556 4.682L11 22z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.75 14.069.008-.005"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.5 14 10 17M9 10.753 7 10l-1 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.001 2H18l-2 1.5V5l4.001 1 2-1.5z"
      />
    </svg>
  );
};
export default Asteroid_01;
