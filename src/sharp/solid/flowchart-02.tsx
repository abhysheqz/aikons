import React from "react";
const Flowchart_02: React.FC<
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
        d="M9.25 2a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8A.75.75 0 0 1 9.25 6zM9.25 10a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM9.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM1.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 10V6h2v4zM3 12a1 1 0 0 1 1-1h6v2H5v5H3zm7 9H6v-2h4zM21 5h-3V3h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v-2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flowchart_02;
