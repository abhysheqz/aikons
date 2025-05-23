import React from "react";
const TissuePaper: React.FC<
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
        strokeWidth={1.5}
        d="M10 9.5c0 3.038-1.79 5.5-4 5.5s-4-2.462-4-5.5S3.79 4 6 4s4 2.462 4 5.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.813 10.694c.12-.529.187-1.1.187-1.694 0-2.761-1.424-5-3.182-5H6c3.155 0 4.57 3.955 4.023 6.567C9.456 13.267 7.5 17 7.5 20h12c0-3 1.712-6.687 2.313-9.306Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.008 9.5h-.009"
      />
    </svg>
  );
};
export default TissuePaper;
