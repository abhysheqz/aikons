import React from "react";
const Presentation_02: React.FC<
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
        d="M11 20.41v2.09h2v-2.09l3.474 2.09 1.026-1.715-4.5-2.707V16.5h-2v1.578l-4.5 2.707L7.526 22.5z"
      />
      <path
        fill="currentColor"
        d="M3.5 1.5h17a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75v-14a.75.75 0 0 1 .75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 17.25H2v-2h20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_02;
