import React from "react";
const GoBackwardSec_15: React.FC<
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
        d="M14.422 3.33A9.005 9.005 0 0 1 21 12 9 9 0 1 1 6.6 4.799a1 1 0 1 0-1.2-1.6C2.73 5.206 1 8.402 1 12c0 6.075 4.925 11 11 11s11-4.925 11-11c0-5.323-3.78-9.76-8.801-10.78a11.05 11.05 0 0 0-4.398 0 1 1 0 0 0-.615 1.561l2 2.8a1 1 0 0 0 1.628 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.4 8.779c.933-.736 2.1.044 2.1 1.037V16a1 1 0 0 1-2 0v-4.634a1 1 0 0 1-1.176-1.603l1.02-.936q.027-.025.056-.048m3.48.962A1.5 1.5 0 0 1 13.358 8.5H16a1 1 0 1 1 0 2h-2.208l-.091.65a4.2 4.2 0 0 1 1.28.091A2.6 2.6 0 0 1 17 13.775v.475A2.75 2.75 0 0 1 14.25 17h-.75a2 2 0 0 1-2-2 1 1 0 1 1 2 0h.75a.75.75 0 0 0 .75-.75v-.476a.6.6 0 0 0-.465-.583 2.2 2.2 0 0 0-1.272.088l-.407.155a1 1 0 0 1-1.346-1.074l.365-2.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoBackwardSec_15;
