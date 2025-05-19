import React from "react";
const BubbleChatUnlock: React.FC<
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
        d="M15.75 4a2.75 2.75 0 0 1 4.812-1.82l-1.124.993A1.25 1.25 0 0 0 17.25 4v.75h5.5v7h-8.5v-7h1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.53 3.5a4 4 0 0 1 .685-1.783A11.2 11.2 0 0 0 12 1.25C6.1 1.25 1.25 5.804 1.25 11.5c0 2.719 1.11 5.186 2.911 7.014L3.25 22.75l4.767-1.727c1.233.47 2.578.727 3.983.727 5.372 0 9.873-3.775 10.636-8.75H13V3.5zM7.01 11H5v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatUnlock;
