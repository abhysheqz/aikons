import React from "react";
const Chrysler: React.FC<
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
        d="M5 22v-4a7 7 0 1 1 14 0v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22v-4a3 3 0 1 1 6 0v4M8 12v-1a4 4 0 1 1 8 0v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 8V6a3 3 0 1 1 6 0v2M12 3V2M12 11v-1M12 7V6M12 15v-1m-4 4h1m6 0h1"
      />
    </svg>
  );
};
export default Chrysler;
