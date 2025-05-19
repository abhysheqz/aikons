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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9h11M3 15h7M3 3h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 9v11.437M15 18l3 3 3-3"
      />
    </svg>
  );
};
export default SortByDown_02;
