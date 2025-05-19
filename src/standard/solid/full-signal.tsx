import React from "react";
const FullSignal: React.FC<
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
        d="M16.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zM9.75 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zM3.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default FullSignal;
