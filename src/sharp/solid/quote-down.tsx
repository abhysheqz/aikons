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
        fill="currentColor"
        d="M20.75 13.75a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7V3.25h-9.5v9.5h7.5zM8.75 13.75a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7V3.25h-9.5v9.5h7.5z"
      />
    </svg>
  );
};
export default QuoteDown;
