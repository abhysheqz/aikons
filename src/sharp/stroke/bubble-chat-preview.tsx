import React from "react";
const BubbleChatPreview: React.FC<
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
        strokeWidth={2}
        d="M17.499 5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.499 8c2.485 0 4.5-3 4.5-3s-2.015-3-4.5-3-4.5 3-4.5 3 2.015 3 4.5 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.994 12h.01m-4.005 0h.009m7.986 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.64 8.97c1.772 6.765-3.689 12.038-9.633 12.038-1.425 0-2.781-.283-4.008-.793l-3.98 1.784a.01.01 0 0 1-.013-.012l1.002-3.695C3.163 16.512 2 14.182 2 11.504 2.001 6.255 6.481 2 12.007 2"
      />
    </svg>
  );
};
export default BubbleChatPreview;
