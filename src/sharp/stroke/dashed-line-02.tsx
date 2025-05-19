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
        strokeWidth={1.5}
        d="M3 10v4M21 10v4M14 3h-4M14 21h-4M3 7V3h4M17 2.998h4v4M21 17v4h-4M7 21.002H3v-4"
      />
    </svg>
  );
};
export default DashedLine_02;
