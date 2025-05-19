import React from "react";
const FlowSquare: React.FC<
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
        d="M11.75 2a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM11.75 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM1.25 9A.75.75 0 0 1 2 8.25h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 4.5a1 1 0 0 1 1-1h7v2h-6V9h-2zm13-1H22v2h-4.5zm-11 15V15h-2v4.5a1 1 0 0 0 1 1h7v-2zm11 0H22v2h-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowSquare;
