import React from "react";
const Calling_02: React.FC<
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
        strokeWidth={1.5}
        d="M13 3a8 8 0 0 1 8 8m-7.5-4.5a4 4 0 0 1 4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 3H3q0 18 18 18v-5l-4.5-2-3 2.5C10 15 9 14 7.5 10.5l2.5-3z"
      />
    </svg>
  );
};
export default Calling_02;
