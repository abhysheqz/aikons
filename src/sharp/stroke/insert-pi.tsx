import React from "react";
const InsertPi: React.FC<
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
        d="M3 8.8C3 7 5.061 5.2 7.685 5.2h9.272C19.2 5.2 21 3.85 21 2.5M16.5 5.5 16 11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5.5c-.133 3.063-.4 8.75-.8 10.5S8 19.5 6 19.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 16.167V17.5m0 0v1.333m0-1.333h1.333M17 17.5h-1.333m5.333 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};
export default InsertPi;
