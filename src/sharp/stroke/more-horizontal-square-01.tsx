import React from "react";
const MoreHorizontalSquare_01: React.FC<
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
        d="M10 14h4v-4h-4zM2 14h4v-4H2zM18 14h4v-4h-4z"
      />
    </svg>
  );
};
export default MoreHorizontalSquare_01;
