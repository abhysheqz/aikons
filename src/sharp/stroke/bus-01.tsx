import React from "react";
const Bus_01: React.FC<
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
        d="M17 18.5v3M7 18.5v3M19.5 18.5v-16h-15v16zM4.5 15.5h2M17.5 15.5h2M10 15.5h4M4.5 12.5H19M2 7.5v3m20-3v3"
      />
    </svg>
  );
};
export default Bus_01;
