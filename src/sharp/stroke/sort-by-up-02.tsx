import React from "react";
const SortByUp_02: React.FC<
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
        d="M3 15h11M3 9h7M3 21h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 15V3.646M15 6l3-3 3 3"
      />
    </svg>
  );
};
export default SortByUp_02;
