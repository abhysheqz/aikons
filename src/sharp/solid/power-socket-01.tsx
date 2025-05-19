import React from "react";
const PowerSocket_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9 3a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 12a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H9.5a1 1 0 0 1-1-1m4.991 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PowerSocket_01;
