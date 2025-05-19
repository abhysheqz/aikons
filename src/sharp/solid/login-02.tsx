import React from "react";
const Login_02: React.FC<
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
        d="m9.599 2 .9 1.808L5.015 6.56v10.88l5.486 2.752L9.599 22l-6.6-3.311V5.31z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.293 8.293 9.586 12l3.707 3.707 1.414-1.414L13.414 13H21v-2h-7.586l1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Login_02;
