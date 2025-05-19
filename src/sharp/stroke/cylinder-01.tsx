import React from "react";
const Cylinder_01: React.FC<
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
        d="M20 5.5C20 7.433 16.418 9 12 9S4 7.433 4 5.5 7.582 2 12 2s8 1.567 8 3.5ZM20 18.5c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5S7.582 15 12 15s8 1.567 8 3.5ZM20 18.5v-13m-16 13v-13"
      />
    </svg>
  );
};
export default Cylinder_01;
