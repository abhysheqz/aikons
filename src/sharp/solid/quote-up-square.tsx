import React from "react";
const QuoteUpSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM7.25 11A2.25 2.25 0 0 1 9.5 8.75v-1.5A3.75 3.75 0 0 0 5.75 11v5.75h5.5v-5.5h-4zm7 0a2.25 2.25 0 0 1 2.25-2.25v-1.5A3.75 3.75 0 0 0 12.75 11v5.75h5.5v-5.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteUpSquare;
