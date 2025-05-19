import React from "react";
const School: React.FC<
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
        d="M7 22V11l5-4 5 4v11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 22v-7l-4-2M3 22v-7l4-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 22h20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22v-4M12.04 7.526v-2.51m0 0V2.015a.01.01 0 0 1 .009-.01c1.557.002 3.79.612 3.915 3.013z"
      />
    </svg>
  );
};
export default School;
