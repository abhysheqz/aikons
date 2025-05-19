import React from "react";
const CallOutgoing_01: React.FC<
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
        d="m4 12 3.49-3.49a1 1 0 0 0 .188-1.155L5.62 3.241a1 1 0 0 0-1.601-.26L2.586 4.414a1.88 1.88 0 0 0-.566 1.414c.419 8.73 7.422 15.733 16.152 16.152.53.026 1.039-.19 1.414-.566l1.433-1.433a1 1 0 0 0-.26-1.602l-4.114-2.057a1 1 0 0 0-1.155.188L12 20M18.5 4 21 6.5 18.5 9M13 6.5h7.391"
      />
    </svg>
  );
};
export default CallOutgoing_01;
