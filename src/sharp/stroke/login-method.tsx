import React from "react";
const LoginMethod: React.FC<
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
        strokeWidth={1.5}
        d="M17.5 7h-11v8.5h11z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 7V5a3 3 0 1 1 6 0v2M13.5 19l-3 3m0-3 3 3M21 19l-3 3m0-3 3 3M6 19l-3 3m0-3 3 3"
      />
    </svg>
  );
};
export default LoginMethod;
