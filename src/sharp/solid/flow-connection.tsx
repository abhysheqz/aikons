import React from "react";
const FlowConnection: React.FC<
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
        d="M14.25 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zM1.75 2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-7A.75.75 0 0 1 1.75 9zM5.999 13.25a.75.75 0 0 1 .53.22l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 .53-.22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 14V9H5v5zm8 3h-5v2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowConnection;
