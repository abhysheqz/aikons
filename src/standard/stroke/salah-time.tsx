import React from "react";
const SalahTime: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 16c-3.392-.487-6-3.473-6-7a7 7 0 0 1 7-7c2.152 0 4.176.972 5.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 7v2.614L8 10.5M13.5 15c-.453-.995-1-2-1-3 0-2.573 2.667-3 4.5-5 1.831 2 4.5 2.427 4.5 5 0 .995-.547 2.005-1 3m-7 0v7H17m-3.5-7h-2m2 0h7m0 0v7H17m3.5-7h2M17 22v-3"
      />
    </svg>
  );
};
export default SalahTime;
