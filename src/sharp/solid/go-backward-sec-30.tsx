import React from "react";
const GoBackwardSec_30: React.FC<
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
        d="M11.806 3.206 12 3.204a8.795 8.795 0 1 1-5.277 1.758L5.55 3.4a10.74 10.74 0 0 0-4.3 8.6c0 5.938 4.814 10.75 10.75 10.75 5.938 0 10.75-4.812 10.75-10.75 0-5.936-4.812-10.75-10.75-10.75-.734 0-1.453.075-2.148.216a.977.977 0 0 0-.6 1.526l1.954 2.736 1.59-1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 10v5h1.5v-5zm-1-2h3.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1M6.25 9a1 1 0 0 1 1-1h4v9h-4a1 1 0 0 1-1-1v-1.304h2V15h1v-1.5h-1.5v-2h1.5V10h-1v.304h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoBackwardSec_30;
