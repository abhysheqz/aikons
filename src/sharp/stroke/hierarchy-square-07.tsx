import React from "react";
const HierarchySquare_07: React.FC<
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
        d="M22 21.974V16.98h-6v4.994zM8 21.974V16.98H2v4.994zM19 16.98v-2.996H5.001L5 16.98"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.526 3.499c0 .842-.682 1.526-1.523 1.526s-1.522-.684-1.522-1.526c0-.843.681-1.526 1.522-1.526s1.523.683 1.523 1.526ZM8.996 10.51c.18-3.996 5.746-4.067 6.014-.001z"
      />
    </svg>
  );
};
export default HierarchySquare_07;
