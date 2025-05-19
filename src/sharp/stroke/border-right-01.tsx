import React from "react";
const BorderRight_01: React.FC<
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
        d="M16.998 3h4v18h-4m-10 0h-4v-4m4-14h-4v4m12-4h-6m0 18h6m-12-12v6M11.998 3v4m0 10v4m3-9h-3m0 0h-3m3 0V9m0 3v3m-5-3h-4"
      />
    </svg>
  );
};
export default BorderRight_01;
