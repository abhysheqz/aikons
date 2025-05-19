import React from "react";
const Spaghetti: React.FC<
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
        d="M22 13H2c0 1.136.642 2.321 1.658 2.83L6 17l2 3h8l2-3 2.342-1.17C21.358 15.32 22 14.135 22 13ZM15 13a6 6 0 0 0-12 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 13a2.5 2.5 0 0 1 5 0v3M21 13c0-2.761-2.225-5-4.97-5-.924 0-1.789.254-2.53.696M9 6.556c.431-1.766 2.328-2.874 4.237-2.475 1.909.4 3.106 2.154 2.675 3.919"
      />
    </svg>
  );
};
export default Spaghetti;
