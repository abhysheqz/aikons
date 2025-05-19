import React from "react";
const HandPointingDown_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 2v2l.999 2.31c.707 1.477 1.674 4.367.322 5.728-2.132 2.145-5.113 2.538-6.821 2.462v5.75a1.75 1.75 0 1 1-3.5 0V10l-2.217 2.329a1.65 1.65 0 0 1-2.414-.234 1.78 1.78 0 0 1 .009-2.184L9 4.003V2"
      />
    </svg>
  );
};
export default HandPointingDown_01;
