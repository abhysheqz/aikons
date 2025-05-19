import React from "react";
const VerticalScrollPoint: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 7l4-4 4 4M16 17l-4 4-4-4"
      />
    </svg>
  );
};
export default VerticalScrollPoint;
