import React from "react";
const MoreVerticalSquare_01: React.FC<
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
        d="M10 18v4h4v-4zM10 2v4h4V2zM10 10v4h4v-4z"
      />
    </svg>
  );
};
export default MoreVerticalSquare_01;
