import React from "react";
const DataRecovery: React.FC<
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
        strokeWidth={1.5}
        d="M3 12c0 1.657 3.582 3 8 3q.508 0 1-.023"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.508 0 1-.023"
      />
      <ellipse
        cx={11}
        cy={5}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7 8v2.5M7 15v2.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 13 .486 3.084-.83-.518a3.5 3.5 0 0 0-2.12-.715c-1.953 0-3.536 1.6-3.536 3.575C14 20.4 15.583 22 17.535 22c1.71 0 3.137-1.228 3.465-2.86"
      />
    </svg>
  );
};
export default DataRecovery;
