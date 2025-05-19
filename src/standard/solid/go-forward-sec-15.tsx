import React from "react";
const GoForwardSec_15: React.FC<
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
        d="M9.578 3.33A9.005 9.005 0 0 0 3 12a9 9 0 1 0 14.4-7.201 1 1 0 1 1 1.2-1.6C21.27 5.206 23 8.402 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12C1 6.677 4.78 2.24 9.801 1.22a11.05 11.05 0 0 1 4.398 0 1 1 0 0 1 .615 1.561l-2 2.8a1 1 0 0 1-1.628 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.4 7.779c.933-.736 2.1.044 2.1 1.037V15a1 1 0 0 1-2 0v-4.634a1 1 0 0 1-1.176-1.603l1.02-.936q.027-.026.056-.048m3.48.962A1.5 1.5 0 0 1 13.358 7.5H16a1 1 0 1 1 0 2h-2.208l-.091.65a4.2 4.2 0 0 1 1.28.091A2.6 2.6 0 0 1 17 12.775v.475A2.75 2.75 0 0 1 14.25 16h-.75a2 2 0 0 1-2-2 1 1 0 1 1 2 0h.75a.75.75 0 0 0 .75-.75v-.476a.6.6 0 0 0-.465-.583 2.2 2.2 0 0 0-1.272.088l-.407.155a1 1 0 0 1-1.346-1.074l.365-2.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoForwardSec_15;
