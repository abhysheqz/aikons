import React from "react";
const Bus_02: React.FC<
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
        d="M17.5 18.5v3M6.5 18.5v3M19.5 18.5v-16h-15v16zM19.5 11.5h-15M22 9.5l-2.5 2M2 9.5l2.5 2"
      />
      <path
        fill="currentColor"
        d="M4.5 15.75H6v-1.5H4.5zm13.5 0h1.5v-1.5H18zm-8 0h4v-1.5h-4z"
      />
    </svg>
  );
};
export default Bus_02;
