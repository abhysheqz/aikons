import React from "react";
const Agreement_02: React.FC<
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
        d="M22 6.75h-4l-2.244-1.493a3 3 0 0 0-1.664-.507h-2.35c-.795 0-1.558.318-2.12.884L7 8.27l1.102.887c.796.64 1.943.576 2.664-.149L12 7.768h1l6 6.036a1.43 1.43 0 0 1 0 2.011 1.41 1.41 0 0 1-2 0l-.5-.502m-3-3.018 3 3.018m0 0a1.43 1.43 0 0 1 0 2.011 1.41 1.41 0 0 1-2 0l-1-1.006m0 0a1.43 1.43 0 0 1 0 2.012 1.41 1.41 0 0 1-2 0L10 16.821m3.5-.503-2-2m-2 2 .5.503m0 0a1.43 1.43 0 0 1 0 2.012 1.41 1.41 0 0 1-2 0L4 14.75H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 14.75h-2.5M8.5 6.75H2"
      />
    </svg>
  );
};
export default Agreement_02;
