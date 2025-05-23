import React from "react";
const Metro: React.FC<
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
        d="m6 19-2 2m14-2 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 15h.009m5.982 0H15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 9c4 4 10.5 4 14 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.273 7.894C6.094 3.716 7.23 3 11.455 3h1.09c4.225 0 5.36.716 6.182 4.894l.553 2.816c.755 3.84 1.132 5.76.032 7.025S16.142 19 12 19c-4.141 0-6.212 0-7.312-1.265s-.723-3.185.032-7.025z"
      />
    </svg>
  );
};
export default Metro;
