import React from "react";
const DistributeVerticalTop: React.FC<
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
        d="M2 2.5h20M2 13.5h20M5 16.5v5h14v-5zM8 5.5v5h8v-5z"
      />
    </svg>
  );
};
export default DistributeVerticalTop;
