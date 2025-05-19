import React from "react";
const TheProphetsMosque: React.FC<
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
        d="M3 22v-2.5c0-2.068.345-2.5 2-2.5h12c1.655 0 2 .432 2 2.5V22zM2 22h20M17.513 6C15.97 4 18.339 3 19 2c.661 1 3.03 2 1.488 4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 6 17 17m0 5h4l-.5-16M11 8c1.984 2.25 6 3 6 9H5c0-6 4.015-6.75 5.999-9"
      />
    </svg>
  );
};
export default TheProphetsMosque;
