import React from "react";
const BubbleChatDownload_01: React.FC<
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
        d="m15.995 6.998 3 2.998 3-2.998m-3-4.998v7.467"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M11.99 11.995H12m-4.005 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.998 11.504c0 5.25-4.476 9.504-9.998 9.504-1.424 0-2.779-.283-4.005-.793l-3.976 1.784a.01.01 0 0 1-.014-.012l1.001-3.695c-1.842-1.78-3.004-4.11-3.004-6.788 0-5.498 5.06-10.505 12.003-9.318"
      />
    </svg>
  );
};
export default BubbleChatDownload_01;
