import React from "react";
const Building_01: React.FC<
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
        d="M4 22h16M18 9h-4m4 4h-4m4 4h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 22V2h.001c1.672 0 3.707 0 4.407.11a9 9 0 0 1 7.481 7.482c.111.7.111 1.536.111 3.208V22"
      />
    </svg>
  );
};
export default Building_01;
