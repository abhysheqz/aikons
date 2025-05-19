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
        fill="currentColor"
        fillRule="evenodd"
        d="M21.5 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M10 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 6c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v12a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 1 18zM12.5 9c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 12.5 15z"
      />
    </svg>
  );
};
export default DistributeHorizontalRight;
