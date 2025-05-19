import React from "react";
const Boxer: React.FC<
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
        d="M3 3h18v3H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4 6-2 5v10h8v-5l2-2m8-8 2 5v10h-8v-5l-2-2m-2-2 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 8.778 12 6l3 5"
      />
    </svg>
  );
};
export default Boxer;
