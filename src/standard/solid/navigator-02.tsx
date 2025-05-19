import React from "react";
const Navigator_02: React.FC<
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
        d="M1.996 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1m0 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1M2.347 7.243a1 1 0 0 1 1.15-.111l7 4a1 1 0 0 1 0 1.736l-7 4a1 1 0 0 1-1.428-1.23L3.483 12 2.068 8.363a1 1 0 0 1 .28-1.12M13 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigator_02;
