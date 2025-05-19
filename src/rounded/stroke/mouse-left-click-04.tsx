import React from "react";
const MouseLeftClick_04: React.FC<
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
        d="M13.5 6V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 7.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C12.801 6 13.034 6 13.5 6s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v2c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C12 10.199 12 9.966 12 9.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 22c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2 6 6.51 6 12s1.5 10 7.5 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 2C3.945 3.132 3.235 4.501 3 6"
      />
    </svg>
  );
};
export default MouseLeftClick_04;
