import React from "react";
const BubbleChatIncome: React.FC<
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
        strokeWidth={1.5}
        d="M22 5h-7.458M17 8l-3-3 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008m3.987 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.654 8.9c1.796 6.889-3.704 12.108-9.648 12.108-1.426 0-2.781-.283-4.009-.793l-3.979 1.784a.01.01 0 0 1-.013-.012l1.001-3.695C3.162 16.512 2 14.182 2 11.504 2 6.255 6.48 2 12.006 2"
      />
    </svg>
  );
};
export default BubbleChatIncome;
