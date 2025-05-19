import React from "react";
const DistributeHorizontalLeft: React.FC<
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
        d="M2.5 2v20M13.5 2v20M16.5 16.002v-8h5v8zM5.5 19V5h5v14z"
      />
    </svg>
  );
};
export default DistributeHorizontalLeft;
