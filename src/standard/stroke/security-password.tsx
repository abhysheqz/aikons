import React from "react";
const SecurityPassword: React.FC<
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
        d="m18.5 11 1.005 1m0 0 .995 1m-.995-1 .995-1m-.995 1L18.5 13m-5-2 1.003 1m0 0 .997 1m-.997-1 .997-1m-.997 1L13.5 13m-5-2 1.002 1m0 0 .998 1m-.998-1 .998-1m-.998 1L8.5 13m-5-2 1 1m0 0 1 1m-1-1 1-1m-1 1-1 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 8V6.123c0-.775-.585-1.418-1.345-1.55-3.06-.532-5.6-1.715-6.84-2.371a1.75 1.75 0 0 0-1.63 0c-1.24.656-3.78 1.84-6.84 2.371C3.585 4.705 3 5.348 3 6.123V8m1.43 8c2.037 3.327 5.68 5.251 7.039 5.881.34.159.721.159 1.062 0 1.36-.63 5.002-2.554 7.04-5.881"
      />
    </svg>
  );
};
export default SecurityPassword;
