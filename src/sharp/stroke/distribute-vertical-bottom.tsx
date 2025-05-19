import React from "react";
const DistributeVerticalBottom: React.FC<
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
        d="M2 21.5h20M2 10.5h20M16.004 7.5h-8v-5h8zM19 18.5H5v-5h14z"
      />
    </svg>
  );
};
export default DistributeVerticalBottom;
