import React from "react";
const Curtains: React.FC<
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
        d="M22 3H2M5 14c.598-.707 1.767-2.606 2-5m12 5c-.599-.707-1.767-2.606-2-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3v18h5c0-2.5-.4-4.933-2-7m-3 .5c6 0 9-6 9-11.5M21 3v11.5m0 0V21h-5c0-2.5.4-4.933 2-7m3 .5c-6 0-9-6-9-11.5"
      />
    </svg>
  );
};
export default Curtains;
