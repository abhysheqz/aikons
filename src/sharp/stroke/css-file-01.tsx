import React from "react";
const CssFile_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7 17v-1H3v6h4v-1m7-5h-4v3h4v3h-4m7 0h4v-3h-4v-3h4M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default CssFile_01;
