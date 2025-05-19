import React from "react";
const TouchInteraction_02: React.FC<
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
        d="m8.533 13.653 1.967 1.72V6.5a1.5 1.5 0 0 1 3.001-.002L13.505 12H17.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5.502a2 2 0 0 1-1.598-.797l-4.056-5.387a1.57 1.57 0 0 1-.008-1.954 1.52 1.52 0 0 1 2.197-.21Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
      />
    </svg>
  );
};
export default TouchInteraction_02;
