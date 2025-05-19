import React from "react";
const QuoteDownSquare: React.FC<
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
        d="M21 3H3v18h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 12V8h-4v4zm0 0v1a3 3 0 0 1-3 3m10-4V8h-4v4zm0 0v1a3 3 0 0 1-3 3"
      />
    </svg>
  );
};
export default QuoteDownSquare;
