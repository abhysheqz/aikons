import React from "react";
const DistributeHorizontalRight: React.FC<
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
        d="M21.5 2v20M10.5 2v20M7.5 5h-5v14h5zM18.5 8h-5v8h5z"
      />
    </svg>
  );
};
export default DistributeHorizontalRight;
