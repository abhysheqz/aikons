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
        fill="currentColor"
        d="M16.004 3.748a2.5 2.5 0 0 1 2.504-2.498 2.5 2.5 0 0 1 2.504 2.498 2.5 2.5 0 0 1-2.504 2.498 2.5 2.5 0 0 1-2.504-2.498M14.25 10.75a4.253 4.253 0 0 1 4.25-3.997 4.253 4.253 0 0 1 4.25 3.997z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.754 3.748c0-.734.211-1.418.576-1.996A11.2 11.2 0 0 0 12 1.25C6.1 1.25 1.25 5.804 1.25 11.5c0 2.719 1.11 5.186 2.911 7.014L3.25 22.75l4.767-1.727c1.233.47 2.578.727 3.983.727 5.726 0 10.464-4.29 10.738-9.75h-9.812l.077-1.323a5.5 5.5 0 0 1 2.715-4.422 3.73 3.73 0 0 1-.964-2.507M7.01 11H5v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatUser;
