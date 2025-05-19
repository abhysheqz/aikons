import React from "react";
const BubbleChatDelay: React.FC<
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
        d="m17.495 6.5 2-2m2.5 1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.99 12H12m-4.005 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.998 11.504c0 5.25-4.476 9.504-9.998 9.504-1.424 0-2.779-.283-4.005-.793l-3.976 1.784a.01.01 0 0 1-.014-.012l1.001-3.695c-1.842-1.78-3.004-4.11-3.004-6.788C2.002 6.255 6.478 2 12 2"
      />
    </svg>
  );
};
export default BubbleChatDelay;
