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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 21.5v-7h-7v7zM9.5 9V2h-7v7zM5.999 22l4-4-4-4-4 4zM6 9v5m4 4h5"
      />
    </svg>
  );
};
export default FlowConnection;
