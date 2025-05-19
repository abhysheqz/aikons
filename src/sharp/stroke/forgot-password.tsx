import React from "react";
const ForgotPassword: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 14.978A1.99 1.99 0 0 1 19 13c1.105 0 2 .886 2 1.978 0 .394-.116.76-.317 1.069-.598.919-1.683 1.795-1.683 2.887v.495M19 22h.012M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M12 15.49v.01M8 15.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 10V9H3v13h12"
      />
    </svg>
  );
};
export default ForgotPassword;
