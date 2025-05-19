import React from "react";
const City_01: React.FC<
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
        d="M8 22V9a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v13M11.5 12.002h2M11.5 15h2m-2 3 2-.001M3 21.994v-9a1 1 0 0 1 1-1h4M22 21.988 2 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7.97V2l8 3.061V22"
      />
    </svg>
  );
};
export default City_01;
