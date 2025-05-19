import React from "react";
const SuperMarioToad: React.FC<
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
        d="M6.775 20.698C5.53 19.614 5.142 17.638 5 15.99c4.123-2.658 10.806-2.655 14 .009-.12 1.672-.525 3.603-1.782 4.698-1.995 1.738-8.453 1.734-10.443 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.009 18H9m6 0h-.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.5 18c-2-1-3.5-3.749-3.5-6C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.251-1.5 5-3.5 6"
      />
      <circle cx={12} cy={8} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.37 7c1.299.314 1.957 1.9 1.47 3.542C4.4 12.018 3.184 13.038 2 12.999M20.632 7c-1.3.314-1.959 1.9-1.471 3.542.438 1.476 1.653 2.495 2.839 2.457"
      />
    </svg>
  );
};
export default SuperMarioToad;
