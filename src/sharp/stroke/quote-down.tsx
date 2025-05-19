import React from "react";
const QuoteDown: React.FC<
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
        d="M14 4v8h8V4zM22 12v2a6 6 0 0 1-6 6M2 4v8h8V4zM10 12v2a6 6 0 0 1-6 6"
      />
    </svg>
  );
};
export default QuoteDown;
