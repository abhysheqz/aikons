import React from "react";
const Exchange_02: React.FC<
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
        d="M6.75 1.25v1.5h1.125c1.036 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.236.313.375.703.375 1.125v.75c0 1.036-.84 1.875-1.875 1.875H6.75v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H2.25v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375M19.75 4.25v6.5h-1.5l-2.2-1.65.9-1.2 1.3.975V5.75H12v-1.5zM4.25 13.25h1.5l2.2 1.65-.9 1.2-1.3-.975v3.125H12v1.5H4.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.678 12.584A.84.84 0 0 0 18 12.25a.84.84 0 0 0-.678.334l-2.93 4.045L18 17.828l3.61-1.2zM21.75 18.177l-3.473 1.154a.9.9 0 0 1-.554 0l-3.473-1.154 3.072 4.239a.84.84 0 0 0 .678.334.84.84 0 0 0 .678-.334z"
      />
    </svg>
  );
};
export default Exchange_02;
