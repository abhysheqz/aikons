import React from "react";
const Zoom: React.FC<
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
        d="M2 14V6h9.83a4 4 0 0 1 4 4v8H6a4 4 0 0 1-4-4M17.5 10 22 7v10l-4.5-3z"
      />
    </svg>
  );
};
export default Zoom;
