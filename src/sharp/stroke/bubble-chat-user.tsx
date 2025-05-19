import React from "react";
const BubbleChatUser: React.FC<
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
        d="M21.999 11.012h-6.994a3.5 3.5 0 0 1 3.497-3.506 3.5 3.5 0 0 1 3.497 3.506ZM20.25 3.75a1.75 1.75 0 0 1-1.748 1.753 1.75 1.75 0 0 1-1.748-1.753 1.75 1.75 0 0 1 1.748-1.752A1.75 1.75 0 0 1 20.25 3.75Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.004 12.013h.009m-4 0h.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.997 2.146a10.5 10.5 0 0 0-2.725-.105C5.563 2.343 1.565 7.144 2.04 12.42c.442 3.255 1.725 4.473 2.982 5.749l-1.06 3.822a.01.01 0 0 0 .015.012l4.004-1.816c1.584.743 3.183.868 5.073.697 4.255-.383 7.538-3.185 8.582-6.88"
      />
    </svg>
  );
};
export default BubbleChatUser;
