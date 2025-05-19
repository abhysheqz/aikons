import React from "react";
const Train_01: React.FC<
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
        d="M7.555 18.168a1 1 0 0 1 .277 1.387l-2 3a1 1 0 0 1-1.664-1.11l2-3a1 1 0 0 1 1.387-.277m8.89 0a1 1 0 0 1 1.387.277l2 3a1 1 0 1 1-1.664 1.11l-2-3a1 1 0 0 1 .277-1.387"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 14.75V6a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8.75h2.5a.75.75 0 0 1 0 1.5H3.158A5 5 0 0 0 8 20h8a5 5 0 0 0 4.843-3.75H18.5a.75.75 0 0 1 0-1.5zM8 3a3 3 0 0 0-3 3v5.224c2.113.509 4.342.776 6.5.776 2.17 0 5.199-.33 7.5-.803V6a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Train_01;
