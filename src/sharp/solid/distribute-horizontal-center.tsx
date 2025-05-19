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
        d="M8 2v3H6V2zM6 22v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.75 8.002a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM3.75 5.002a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 2v6h-2V2zm-2 20v-6h2v6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DistributeHorizontalCenter;
