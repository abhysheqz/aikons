import React from "react";
const Presentation_01: React.FC<
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
        d="M11 20.16v2.09h2v-2.09l3.474 2.09 1.026-1.715-4.5-2.707V16.25h-2v1.578l-4.5 2.707 1.026 1.715z"
      />
      <path
        fill="currentColor"
        d="M2.25 2.5A.75.75 0 0 1 3 1.75h18a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default Presentation_01;
