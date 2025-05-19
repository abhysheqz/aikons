import React from "react";
const MouseRightClick_01: React.FC<
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
        d="M18.318 1.268a1 1 0 0 1 1.413.05c1.177 1.263 1.987 2.811 2.257 4.527a1 1 0 1 1-1.976.31c-.201-1.282-.811-2.473-1.744-3.473a1 1 0 0 1 .05-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 1.26c-.805.02-1.619.067-2.37.126-2.422.188-4.376 2.004-4.697 4.424C2.457 7.516 2.25 9.703 2.25 12c0 2.388.224 4.658.46 6.392.314 2.3 2.128 4.072 4.468 4.241.941.068 2.058.117 3.322.117s2.381-.049 3.322-.117c2.34-.169 4.154-1.94 4.468-4.241.236-1.734.46-4.004.46-6.392 0-2.297-.207-4.484-.433-6.19-.32-2.42-2.275-4.236-4.697-4.424a45 45 0 0 0-2.37-.126v4.008c.848.121 1.5.85 1.5 1.732v2a1.75 1.75 0 0 1-1.5 1.733V12a.75.75 0 1 1-1.5 0v-1.267A1.75 1.75 0 0 1 8.25 9V7a1.75 1.75 0 0 1 1.5-1.732z"
      />
      <path
        fill="currentColor"
        d="M9.75 7a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-1A.25.25 0 0 1 9.75 9z"
      />
    </svg>
  );
};
export default MouseRightClick_01;
