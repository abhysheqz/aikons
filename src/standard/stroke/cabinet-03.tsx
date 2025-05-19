import React from "react";
const Cabinet_03: React.FC<
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
        d="M3 3h18v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 3h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 18.5V21m13-2.5V21M3 10.5h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m10 13.5.789.394c.139.07.292.106.447.106h1.528a1 1 0 0 0 .447-.106L14 13.5M10 6.5l.789.394a1 1 0 0 0 .447.106h1.528a1 1 0 0 0 .447-.106L14 6.5"
      />
    </svg>
  );
};
export default Cabinet_03;
