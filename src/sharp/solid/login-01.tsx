import React from "react";
const Login_01: React.FC<
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
        d="M13.098 4c-4.811 0-8.6 3.642-8.6 8s3.789 8 8.6 8q.646-.001 1.264-.086l.272 1.982Q13.88 22 13.098 22c-5.792 0-10.6-4.417-10.6-10s4.808-10 10.6-10q.782.001 1.536.104l-.272 1.982A9 9 0 0 0 13.098 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.913 13 1.293 1.293-1.415 1.414L10.084 12l3.707-3.707 1.415 1.414L13.913 11h7.585v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Login_01;
