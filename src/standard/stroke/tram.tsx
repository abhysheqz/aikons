import React from "react";
const Tram: React.FC<
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
        d="M5 2h9m5 0h-5m0 0-2 3M8 20l-1 2m9-2 1 2M19 17V8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3M16.5 17H19M5 17h2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 13c2.111.655 4.375 1 6.563 1s5.31-.42 7.437-1"
      />
    </svg>
  );
};
export default Tram;
