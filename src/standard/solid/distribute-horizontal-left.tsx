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
        fill="currentColor"
        d="M11 6a1.75 1.75 0 0 0-1.75-1.75h-3A1.75 1.75 0 0 0 4.5 6v12c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 11 18z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M13.5 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.5 9a1.75 1.75 0 0 0-1.75-1.75h-3A1.75 1.75 0 0 0 16 9v6c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 22.5 15z"
      />
    </svg>
  );
};
export default DistributeHorizontalLeft;
