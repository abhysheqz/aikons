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
        d="M22.001 20.5v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1ZM9.501 8V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1ZM5.293 21.293a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414zM6.001 9v5m4 4h5"
      />
    </svg>
  );
};
export default FlowConnection;
