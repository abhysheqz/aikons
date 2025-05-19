import React from "react";
const PunchingBall_02: React.FC<
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
        d="M7.812 18.205a.75.75 0 0 1 .689-.455H11v-5h-.48l-.686-1.487-.001-.002c-.356-.78-.84-1.305-1.371-1.884a31 31 0 0 1-.393-.431c-.675-.762-1.32-1.661-1.32-3.1 0-1.545.596-2.735 1.61-3.517.987-.761 2.293-1.079 3.64-1.079s2.652.31 3.64 1.068c1.017.781 1.61 1.972 1.61 3.528 0 1.448-.642 2.348-1.319 3.11q-.203.227-.398.437c-.53.574-1.01 1.094-1.365 1.868l-.001.003-.686 1.486H13v5h2.5c.3 0 .571.179.69.455l1.499 3.5A.75.75 0 0 1 17 22.75H7a.75.75 0 0 1-.688-1.045z"
      />
    </svg>
  );
};
export default PunchingBall_02;
