import React from "react";
const GibbousMoon: React.FC<
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
        d="M20.5 14.469A8.107 8.107 0 0 1 9.531 3.5 9.12 9.12 0 1 0 20.5 14.469ZM21.5 12A9.5 9.5 0 0 0 12 2.5"
      />
    </svg>
  );
};
export default GibbousMoon;
