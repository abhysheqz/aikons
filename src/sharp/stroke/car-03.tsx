import React from "react";
const Car_03: React.FC<
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
        d="M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2 11h16M9 11V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 18h2.99a.01.01 0 0 0 .01-.01v-4.984a.01.01 0 0 0-.006-.009L18 11l-3.997-4.996A.01.01 0 0 0 13.995 6H4m11 12H9m-4 0H2.01a.01.01 0 0 1-.01-.01V11l2-5M2 6h2"
      />
    </svg>
  );
};
export default Car_03;
