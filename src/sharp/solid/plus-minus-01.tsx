import React from "react";
const PlusMinus_01: React.FC<
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
        d="M10.75 8.25V2.5h2.5v5.75H19v2.5h-5.75v5.75h-2.5v-5.75H5v-2.5zM5 19h14v2.5H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinus_01;
