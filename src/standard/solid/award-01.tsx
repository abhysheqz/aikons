import React from "react";
const Award_01: React.FC<
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
        d="M5 1.25a.75.75 0 0 0-.75.75v2H2a1 1 0 0 0-1 1c0 3.206 1.075 5.585 2.945 6.832a1 1 0 0 0 1.11-1.664C4.067 9.51 3.236 8.188 3.043 6h1.27A7.754 7.754 0 0 0 11 12.686v4.67A4.75 4.75 0 0 0 7.25 22c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75A4.75 4.75 0 0 0 13 17.355v-4.669A7.754 7.754 0 0 0 19.686 6h1.271c-.193 2.188-1.024 3.51-2.012 4.168a1 1 0 0 0 1.11 1.664C21.925 10.585 23 8.206 23 5a1 1 0 0 0-1-1h-2.25V2a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_01;
