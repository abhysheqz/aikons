import React from "react";
const Select_01: React.FC<
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
        d="M5 2v6M2 5h6M11 5h4m-3 17h3m3-17h4v4m0 9v4h-4m-9 0H5v-4m17-6v3M5 11v4"
      />
    </svg>
  );
};
export default Select_01;
