import React from "react";
const SolarPanel_02: React.FC<
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
        d="M18.646 2.5H6.74a1 1 0 0 0-.956.706l-3.385 11a1 1 0 0 0 .956 1.294h11.908a1 1 0 0 0 .956-.706l3.384-11a1 1 0 0 0-.956-1.294"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m22 6-3.544 10.633A2 2 0 0 1 16.558 18H4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 7H19m-1.5 4H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 18v3.5m0 0h2m-2 0H9M15.5 2.5h-5l-4 13h5z"
      />
    </svg>
  );
};
export default SolarPanel_02;
