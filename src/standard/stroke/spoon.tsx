import React from "react";
const Spoon: React.FC<
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
        d="M21.105 2.895c-1.715-1.716-5.447-.765-7.377 1.165-1.02 1.02-1.268 2.699-1.297 3.923-.023.956-.336 1.911-1.02 2.579L2.503 19.24a1.597 1.597 0 1 0 2.257 2.257l8.679-8.907c.667-.685 1.623-.998 2.578-1.02 1.224-.03 2.904-.278 3.923-1.298 1.93-1.93 2.88-5.661 1.165-7.377"
      />
    </svg>
  );
};
export default Spoon;
