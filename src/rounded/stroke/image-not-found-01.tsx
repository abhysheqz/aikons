import React from "react";
const ImageNotFound_01: React.FC<
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
        d="M15.5 8a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1V7M2 2l20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.3 21.3c-1.281.2-2.97.2-5.3.2-4.23 0-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12c0-2.33 0-4.019.2-5.3m17.335 13.335q.14-.138.267-.288C21.5 18.345 21.5 16.23 21.5 12s0-6.345-1.198-7.747q-.256-.3-.555-.555C18.345 2.5 16.23 2.5 12 2.5s-6.345 0-7.747 1.198q-.15.128-.289.266"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 16 4.5-4.5M21 16l-2.47-2.47a1.81 1.81 0 0 0-2.56 0l-1.22 1.22"
      />
    </svg>
  );
};
export default ImageNotFound_01;
