import React from "react";
const MouseLeftClick_06: React.FC<
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
        d="M13.5 5.5V2m0 10V9M13.5 22c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2 6 6.51 6 12s1.5 10 7.5 10ZM5.5 3.5 4.619 2M5 5.5 3 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 5.5h-3V9h3zM6 12h15"
      />
    </svg>
  );
};
export default MouseLeftClick_06;
