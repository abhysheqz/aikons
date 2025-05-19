import React from "react";
const Background: React.FC<
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
        d="M4.253 20.302C5.655 21.5 7.77 21.5 12 21.5s6.345 0 7.747-1.198q.3-.256.555-.555C21.5 18.345 21.5 16.23 21.5 12s0-6.345-1.198-7.747q-.256-.3-.555-.555C18.345 2.5 16.23 2.5 12 2.5s-6.345 0-7.747 1.198q-.3.256-.555.555C2.5 5.655 2.5 7.77 2.5 12s0 6.345 1.198 7.747q.256.3.555.555M4 20 20 4M2.698 15.802 15.806 2.694M21.306 8.194 8.198 21.302M13.5 21.5l8-8M2.5 10.5l8-8"
      />
    </svg>
  );
};
export default Background;
