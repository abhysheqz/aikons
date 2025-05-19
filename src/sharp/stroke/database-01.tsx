import React from "react";
const Database_01: React.FC<
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
        d="M21 3H3v18h18zM3 12h18M11 7.5h7m-9 0H6M11 16.5h7m-9 0H6"
      />
    </svg>
  );
};
export default Database_01;
