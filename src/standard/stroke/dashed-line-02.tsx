import React from "react";
const DashedLine_02: React.FC<
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
        d="M6 3H4a2 2 0 0 0-2 2v2m15-4h2a2 2 0 0 1 2 2v2M2 18v2a2 2 0 0 0 2 2h2m11 0h2a2 2 0 0 0 2-2v-2M9.5 3h4m-4 19h4M21 10.5v4m-19-4v4"
      />
    </svg>
  );
};
export default DashedLine_02;
