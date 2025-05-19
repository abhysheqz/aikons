import React from "react";
const React_01: React.FC<
  {
    size?: number | string | undefined;
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
        d="M8 12C8 6.477 9.79 2 12 2s4 4.477 4 10-1.79 10-4 10-4-4.477-4-10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.975 8.62c4.842-2.762 9.674-3.45 10.792-1.537s-1.9 5.703-6.742 8.464-9.674 3.45-10.792 1.536c-1.118-1.913 1.9-5.702 6.742-8.464Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.025 8.62c4.842 2.76 7.86 6.55 6.742 8.463-1.118 1.914-5.95 1.226-10.792-1.536s-7.86-6.55-6.742-8.464C4.35 5.17 9.183 5.858 14.025 8.62Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
};
export default React_01;
