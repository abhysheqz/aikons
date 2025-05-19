import React from "react";
const Presentation_04: React.FC<
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
        d="M2.25 3.5A.75.75 0 0 1 3 2.75h18a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.5v-2h2v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 20.41v2.09h2v-2.09l3.474 2.09 1.026-1.715-4.5-2.707V16.5h-2v1.578l-4.5 2.707L7.526 22.5z"
      />
    </svg>
  );
};
export default Presentation_04;
