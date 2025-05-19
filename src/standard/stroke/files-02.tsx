import React from "react";
const Files_02: React.FC<
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
        d="M18.5 5h-10a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6.172a2 2 0 0 0 1.414-.586l3.828-3.828a2 2 0 0 0 .586-1.414V7a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 21.5V18a1 1 0 0 1 1-1H20M6.5 19h-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M10.5 14h3M10.5 10h6"
      />
    </svg>
  );
};
export default Files_02;
