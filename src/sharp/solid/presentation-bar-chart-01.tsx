import React from "react";
const PresentationBarChart_01: React.FC<
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
        d="M11 19.66v2.09h2v-2.09l3.474 2.09 1.026-1.715-4.5-2.707V15.75h-2v1.578l-4.5 2.707 1.026 1.715z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 1.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zM13 13V6h-2v7zm-4 0V9H7v4zm8 0v-3h-2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationBarChart_01;
