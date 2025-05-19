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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm4.5 14.5A3.75 3.75 0 0 0 11.25 13V7.25h-5.5v5.5h4V13a2.25 2.25 0 0 1-2.25 2.25zm7 0A3.75 3.75 0 0 0 18.25 13V7.25h-5.5v5.5h4V13a2.25 2.25 0 0 1-2.25 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteDownSquare;
