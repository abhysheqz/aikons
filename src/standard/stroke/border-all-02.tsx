import React from "react";
const BorderAll_02: React.FC<
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
        d="M5.5 21.5h13a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3Z"
      />
    </svg>
  );
};
export default BorderAll_02;
