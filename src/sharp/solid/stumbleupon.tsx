import React from "react";
const Stumbleupon: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9 4A2.75 2.75 0 0 0 9.25 9v6a1.25 1.25 0 1 1-2.5 0v-2h-1.5v2a2.75 2.75 0 1 0 5.5 0V9a1.25 1.25 0 1 1 2.5 0v1h1.5V9A2.75 2.75 0 0 0 12 6.25M14.75 15v-2h-1.5v2a2.75 2.75 0 1 0 5.5 0v-2h-1.5v2a1.25 1.25 0 1 1-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stumbleupon;
