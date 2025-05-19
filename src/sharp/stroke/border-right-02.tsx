import React from "react";
const BorderRight_02: React.FC<
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
        d="M17 3h4v18h-4M7 21H3v-4M7 3H3v4m12-4H9m0 18h6M3 9v6"
      />
    </svg>
  );
};
export default BorderRight_02;
