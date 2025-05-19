import React from "react";
const ElearningExchange: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.128 16.611A9.97 9.97 0 0 1 4.943 4.933c3.677-3.665 9.493-3.896 13.424-.688L15.89 5.304m4.982 2.085a9.97 9.97 0 0 1-1.815 11.679c-3.677 3.664-9.493 3.895-13.424.687l2.475-1.056"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.06 13.476 17.99 10m0 0-6.023-2.98a.01.01 0 0 0-.009 0L6.031 9.962a.01.01 0 0 0 0 .018l2.503 1.31M17.989 10l-2.523 1.29m0 0-3.504 1.694-3.428-1.694m6.932 0v3.758l-3.5 1.97a.01.01 0 0 1-.01 0l-3.422-2.032V11.29"
      />
    </svg>
  );
};
export default ElearningExchange;
