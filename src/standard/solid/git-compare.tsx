import React from "react";
const GitCompare: React.FC<
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
        fillRule="evenodd"
        d="M12.883 1.576a1 1 0 0 1 .617.924V4H17a3 3 0 0 1 3 3v9.438a2.751 2.751 0 1 1-2 0V7a1 1 0 0 0-1-1h-3.5v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217M5.999 7.563a2.751 2.751 0 1 0-2 0V17a3 3 0 0 0 3 3h3.5v1.5a1 1 0 0 0 1.707.707l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 0 0-1.707.707V18h-3.5a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitCompare;
