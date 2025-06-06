import React from "react";
const Java: React.FC<
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
        d="M6.175 10.32c-1.208.407-1.955.968-1.955 1.588 0 .846 1.389 1.582 3.44 1.964m0 0c-.762.385-1.217.872-1.217 1.403 0 2.687 7.557 2.188 7.557 2.188m-6.34-3.59c.956.178 2.056.28 3.227.28 1.708 0 3.265-.217 4.445-.572M16.5 9.988a20.6 20.6 0 0 1-5.613.798C6.592 10.786 3 9.733 3 8.493c0-.957 2.076-1.67 5-1.993"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 19.07C21.5 20 17.523 22 12 22S2 20.688 2 19.07c0-1.15 1.707-2.09 5-2.57M18.5 9C21 9 22 10 22 12c.01 1.5-1.553 3.43-4.5 4.5M17.5 2c-.74.123-2.075.815-1.72 2.593.356 1.777.164 2.351-.28 2.907M13 2c-.74.148-2.02.978-1.665 3.111S11 8 11 8"
      />
    </svg>
  );
};
export default Java;
