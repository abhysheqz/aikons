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
        strokeWidth={1.5}
        d="m8.533 13.653 1.967 1.72V6.5a1.5 1.5 0 0 1 3.001-.002L13.505 12H17.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5H11l-4.656-6.184a1.57 1.57 0 0 1-.008-1.954 1.52 1.52 0 0 1 2.197-.21Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8H3V2h18v6h-4"
      />
    </svg>
  );
};
export default TouchInteraction_02;
