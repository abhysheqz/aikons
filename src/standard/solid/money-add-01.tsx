import React from "react";
const MoneyAdd_01: React.FC<
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
        d="M20 3.25A2.75 2.75 0 0 1 22.75 6v8.5H21v-.75a2.25 2.25 0 0 0-4.5 0v.75h-.75a2.25 2.25 0 0 0-1.027 4.25H4A2.75 2.75 0 0 1 1.25 16V6A2.75 2.75 0 0 1 4 3.25zM2.75 16c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4.75c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V6c0-.69-.56-1.25-1.25-1.25z"
      />
      <path
        fill="currentColor"
        d="M17.75 19.75v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0"
      />
    </svg>
  );
};
export default MoneyAdd_01;
