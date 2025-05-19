import React from "react";
const Exchange_01: React.FC<
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
        d="M10.694 3.051c10.15-.915 13.128 10.66 7.477 15.473M17 16v3.5h3.5m-7.205 1.46C3.195 21.763.167 10.3 5.818 5.487M7 7.5v-3H3.5"
      />
    </svg>
  );
};
export default Exchange_01;
