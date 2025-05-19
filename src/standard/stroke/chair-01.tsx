import React from "react";
const Chair_01: React.FC<
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
        d="m8 15-2 7m10-7 2 7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 12 .82-8.199A2 2 0 0 1 9.81 2h4.38a2 2 0 0 1 1.99 1.801L17 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 14v1h12v-1a2.25 2.25 0 0 0-1.385-2.077 12 12 0 0 0-9.23 0A2.25 2.25 0 0 0 6 14"
      />
    </svg>
  );
};
export default Chair_01;
