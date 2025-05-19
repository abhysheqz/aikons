import React from "react";
const LimitOrder: React.FC<
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
        d="M2 7a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .707.293l4.088 4.088a4 4 0 1 1-1.543 1.285L5.085 8H3a1 1 0 0 1-1-1m10 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m10 1.99a1 1 0 1 0-2 0V14a1 1 0 1 0 2 0zM19 14a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zM3 13a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V14a1 1 0 0 1 1-1m3 .01a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1m7 .98a1 1 0 1 0-2 0V14a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LimitOrder;
