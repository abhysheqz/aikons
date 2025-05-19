import React from "react";
const BubbleChatLock: React.FC<
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
        d="M18.5 1.25A2.75 2.75 0 0 0 15.75 4v.75h-1.5v7h8.5v-7h-1.5V4a2.75 2.75 0 0 0-2.75-2.75M19.75 4v.75h-2.5V4a1.25 1.25 0 1 1 2.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13h9.636c-.763 4.975-5.264 8.75-10.636 8.75-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25c1.118 0 2.198.163 3.215.467A4 4 0 0 0 14.53 3.5H13zm-5.991-2H5v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatLock;
