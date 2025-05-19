import React from "react";
const Analytics_02: React.FC<
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
        d="M13.5 5.75c0-1.469.603-2.797 1.576-3.75H4.75A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75V9.424a5.25 5.25 0 0 1-9-3.674m-.5 4.5a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm-5 3a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 5.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Analytics_02;
