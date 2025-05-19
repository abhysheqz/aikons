import React from "react";
const ResetPassword: React.FC<
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
        d="M21.5 12A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 8.71 5.7m.79-2.7-.475 3.175L18 8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.25 11V9.25a1.75 1.75 0 1 1 3.5 0V11m1.75 1v3.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
};
export default ResetPassword;
