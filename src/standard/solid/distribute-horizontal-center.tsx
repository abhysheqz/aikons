import React from "react";
const DistributeHorizontalCenter: React.FC<
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
        fillRule="evenodd"
        d="M7.25 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 13a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m-10 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 9.5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 14 14.5zM4 6.5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v11a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 4 17.5z"
      />
    </svg>
  );
};
export default DistributeHorizontalCenter;
