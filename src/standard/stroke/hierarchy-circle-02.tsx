import React from "react";
const HierarchyCircle_02: React.FC<
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
        d="M5 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM19 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 16v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
    </svg>
  );
};
export default HierarchyCircle_02;
