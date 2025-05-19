import React from "react";
const Flowchart_01: React.FC<
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
        d="M15.999 5V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1ZM15.999 21v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1ZM11.999 15l3-3-3-3-3 3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.999M14.999 12h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M11.999 9V6m0 9v3"
      />
    </svg>
  );
};
export default Flowchart_01;
