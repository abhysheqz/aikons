import React from "react";
const Mouse_11: React.FC<
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
        d="M12.5 5.5V2m0 10V9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.5 22c6 0 7.5-4.51 7.5-10S18.5 2 12.5 2 5 6.51 5 12s1.5 10 7.5 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C11 6.301 11 6.534 11 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C14 8.199 14 7.966 14 7.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 12h14"
      />
    </svg>
  );
};
export default Mouse_11;
