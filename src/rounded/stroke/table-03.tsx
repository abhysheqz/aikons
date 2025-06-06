import React from "react";
const Table_03: React.FC<
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
        d="M22 4H2M3 4v.656c0 .967.228 1.915.66 2.744l.548 1.054c.978 1.876 1.055 4.198.206 6.155l-1.12 2.582A3.6 3.6 0 0 0 3 18.622V20M21 4v.656a5.96 5.96 0 0 1-.66 2.744l-.549 1.054c-.977 1.876-1.054 4.198-.205 6.155l1.12 2.582c.194.444.294.934.294 1.431V20M5 12h14M4.5 15h15M14 7c-.245.613-.746 1-1.294 1h-1.412c-.548 0-1.049-.387-1.294-1"
      />
    </svg>
  );
};
export default Table_03;
