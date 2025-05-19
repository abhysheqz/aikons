import React from "react";
const Gold: React.FC<
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
        d="m11 22-2-6H4l-2 6zM22 22l-2-6h-5l-2 6zM16.5 13.5l-2-6h-5l-2 6zM12 2v2m-4.5-.5L9 5m7.5-1.5L15 5"
      />
    </svg>
  );
};
export default Gold;
