import React from "react";
const MouseRightClick_04: React.FC<
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
        d="M10.5 6V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 22c6 0 7.5-4.51 7.5-10S16.5 2 10.5 2 3 6.51 3 12s1.5 10 7.5 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 7.5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C11.199 6 10.966 6 10.5 6s-.699 0-.883.076a1 1 0 0 0-.54.541C9 6.801 9 7.034 9 7.5v2c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C12 10.199 12 9.966 12 9.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 2c1.055 1.132 1.765 2.501 2 4"
      />
    </svg>
  );
};
export default MouseRightClick_04;
