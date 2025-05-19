import React from "react";
const Browser: React.FC<
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
        d="M1.75 3a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v5.25H1.75zm0 18V9.75h19.5V21a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75M7.5 4.25h-2v2h2zm4 0h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Browser;
