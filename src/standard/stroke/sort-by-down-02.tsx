import React from "react";
const SortByDown_02: React.FC<
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
        d="M3.5 9h10M3.5 15h6M3.5 3h15M15.5 18.5 18 21l2.5-2.5m-2.5-9v10.891"
      />
    </svg>
  );
};
export default SortByDown_02;
