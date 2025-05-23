import React from "react";
const CallOutgoing_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 8.5V4h-4.5M13 11l6.594-6.594M4 12l3.49-3.49a1 1 0 0 0 .188-1.155L5.62 3.241a1 1 0 0 0-1.601-.26L2.586 4.414A1.88 1.88 0 0 0 2.02 5.83c.419 8.73 7.422 15.732 16.152 16.151.53.026 1.039-.19 1.414-.566l1.433-1.433a1 1 0 0 0-.26-1.601l-4.114-2.057a1 1 0 0 0-1.155.187L12 20"
      />
    </svg>
  );
};
export default CallOutgoing_02;
