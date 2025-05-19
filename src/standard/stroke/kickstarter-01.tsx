import React from "react";
const Kickstarter_01: React.FC<
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
        d="M4 19 3.996 5.006a2 2 0 0 1 1.999-2h2.003a2 2 0 0 1 2 2v4.967c0 .01.01.014.017.007l5.112-6.112a2 2 0 0 1 2.757-.53l1.222.814a2 2 0 0 1 .572 2.746L15.495 12l4.183 5.106a2 2 0 0 1-.572 2.745l-1.223.816c-.909.606-2.136.37-2.755-.532l-5.113-6.114c-.006-.007-.018-.003-.018.006V19a2 2 0 0 1-1.999 2h-2A2 2 0 0 1 4 19Z"
      />
    </svg>
  );
};
export default Kickstarter_01;
