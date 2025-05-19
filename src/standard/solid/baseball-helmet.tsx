import React from "react";
const BaseballHelmet: React.FC<
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
        d="M11 2.25a9.75 9.75 0 0 1 8.777 5.5H22a.75.75 0 0 1 .624 1.166l-1.703 2.555a1.75 1.75 0 0 1-1.456.779H17.5a3.75 3.75 0 0 0-3.659 2.922v.008l.01.014a.2.2 0 0 0 .149.056h1a3.25 3.25 0 0 1 0 6.5H7.236c-.266 0-.546-.06-.805-.201C3.257 19.814 1.25 15.663 1.25 12c0-5.385 4.365-9.75 9.75-9.75m3.5 15.25a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BaseballHelmet;
