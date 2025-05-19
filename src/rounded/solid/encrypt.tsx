import React from "react";
const Encrypt: React.FC<
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
        d="M6.5 10.75a5.25 5.25 0 1 0 4.473 8H16.5a.75.75 0 0 0 .54-.229l.71-.735.71.735a.75.75 0 0 0 .54.229h1a.75.75 0 0 0 .53-.22l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.53-.22h-9.027a5.25 5.25 0 0 0-4.473-2.5m-.5 4.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM3 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5A.75.75 0 0 1 3 2.75M7.5 4.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75M5.25 5a2.25 2.25 0 0 1 4.5 0v2a2.25 2.25 0 0 1-4.5 0zM12 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M15 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M19.5 4.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75M17.25 5a2.25 2.25 0 0 1 4.5 0v2a2.25 2.25 0 0 1-4.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Encrypt;
