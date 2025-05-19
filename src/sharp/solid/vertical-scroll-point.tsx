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
        fill="currentColor"
        d="m12 8.5 3.5 3.5-3.5 3.5L8.5 12zM12 3l4 4H8zM12 21l4-4H8z"
      />
    </svg>
  );
};
export default VerticalScrollPoint;
