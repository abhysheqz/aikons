import React from "react";
const MinusPlus_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 15.75v5.75h2.5v-5.75H19v-2.5h-5.75V7.5h-2.5v5.75H5v2.5zM5 5h14V2.5H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlus_01;
