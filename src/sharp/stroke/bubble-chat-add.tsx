import React from "react";
const BubbleChatAdd: React.FC<
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
        d="M13.999 6h8m-4-4v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.995 12h.009m3.986 0h.009m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.997 11.504c0 5.25-4.477 9.504-9.998 9.504-1.424 0-2.78-.283-4.005-.793l-3.976 1.784a.01.01 0 0 1-.014-.012l1.001-3.695c-1.843-1.78-3.004-4.11-3.004-6.788C2.001 6.255 6.477 2 11.999 2"
      />
    </svg>
  );
};
export default BubbleChatAdd;
