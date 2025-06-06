import React from "react";
const FolderOpen: React.FC<
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
        d="M2.5 21.5v-15a1 1 0 0 1 1-1h3.52a1 1 0 0 1 .78.375L9.5 8h8a1 1 0 0 1 1 1v2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 21.5h14.476l3.451-8.629A1 1 0 0 0 19.5 11.5H7.177a1 1 0 0 0-.928.629zM11.5 4.515c.915-1.23 2.166-1.96 4.012-2.013a4.1 4.1 0 0 1 1.756.353c1.307.571 2.15 1.301 2.732 2.645L21.5 3"
      />
    </svg>
  );
};
export default FolderOpen;
