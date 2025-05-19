import React from "react";
const SortByUp_01: React.FC<
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
        d="M9.995 3H3.002v7h6.993zM9.995 14H3.002v7h6.993z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.01 7.992 2.997-2.988 2.99 3.012M14.015 17.5l3.95-3.456a.1.1 0 0 0 .034-.075V5.46"
      />
    </svg>
  );
};
export default SortByUp_01;
