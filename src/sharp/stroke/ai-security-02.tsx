import React from "react";
const AiSecurity_02: React.FC<
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
        d="m10.357 8.5.7-.267-.183-.483h-.517zm1.585 6.267.267.701 1.402-.534-.267-.7zM16.25 8.5v-.75h-1.5v.75zm-1.5 6v.75h1.5v-.75zm-4.964-6v-.75h-.517l-.184.483zm-2.987 5.733-.267.701 1.402.534.267-.7zm2.857-5.466 2.286 6 1.402-.534-2.286-6zM14.75 8.5v6h1.5v-6zm-5.665-.267-2.286 6 1.402.534 2.285-6zm-.97 5.217h3.956v-1.5H8.115zm2.242-5.7h-.571v1.5h.571z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11V5c-5-.5-9-3-9-3S8 4.5 3 5v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
    </svg>
  );
};
export default AiSecurity_02;
