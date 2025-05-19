import React from "react";
const Pavilon: React.FC<
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
        d="m9.5 21.5.41-4.1a1 1 0 0 1 .995-.9h2.19a1 1 0 0 1 .995.9l.41 4.1M3 21.5h18M3 8.5c5.5 0 8.5-3.5 9-6 .5 2.5 3.5 6 9 6a4.39 4.39 0 0 1-4.162 3H7.162A4.39 4.39 0 0 1 3 8.5M5.5 11.5v10m13-10v10"
      />
    </svg>
  );
};
export default Pavilon;
