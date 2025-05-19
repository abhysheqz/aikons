import React from "react";
const FocusPoint: React.FC<
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
        d="M9 2.5H2.5V8M15 2.5h6.5V8M15 21.5h6.5V16M9 21.5H2.502V16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 7h3m-3 5h3m-3 5h3M4 12h3m10 0h3"
      />
    </svg>
  );
};
export default FocusPoint;
