import React from "react";
const BorderNone_01: React.FC<
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
        d="M3 17.001v4h4m14-4v4h-4m4-14v-4h-4m-14 4v-4h4m-4 12v-6m18 0v6m-12-12h6m0 18H9M3 12h4m10 0h4m-9 3v-3m0 0V9m0 3H9m3 0h3m-3-5V3m0 18v-4"
      />
    </svg>
  );
};
export default BorderNone_01;
