import React from "react";
const FlowCircle: React.FC<
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
        d="M18 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4.5h-4M6 8V4.5h7m9 15h-4M6 16v3.5h7"
      />
    </svg>
  );
};
export default FlowCircle;
