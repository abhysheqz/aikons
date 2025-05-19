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
        d="M9.975 8.583c4.842-2.723 9.674-3.402 10.792-1.515s-1.9 5.625-6.742 8.349C9.183 18.14 4.35 18.819 3.233 16.932s1.9-5.625 6.742-8.349Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.025 8.583c4.842 2.724 7.86 6.462 6.742 8.349s-5.95 1.208-10.792-1.515c-4.842-2.724-7.86-6.462-6.742-8.349C4.35 5.182 9.183 5.86 14.025 8.583Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M12 12v.01"
      />
    </svg>
  );
};
export default React_01;
