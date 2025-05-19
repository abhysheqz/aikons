import React from "react";
const AppleFinder: React.FC<
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
        d="M21 3v18H3V3zM7 8v2M17 8v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16.5c3.5 2 6.5 2 10 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13 3c-.866 1.285-3 7-3 10h2.5s-1.5 4 .49 8"
      />
    </svg>
  );
};
export default AppleFinder;
