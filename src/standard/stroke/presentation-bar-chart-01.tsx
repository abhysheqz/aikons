import React from "react";
const PresentationBarChart_01: React.FC<
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
        d="M21.5 15V5a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 13v-3m4 3V7m4 6v-2M12 18v4M10 18l-5 4M14 18l5 4"
      />
    </svg>
  );
};
export default PresentationBarChart_01;
