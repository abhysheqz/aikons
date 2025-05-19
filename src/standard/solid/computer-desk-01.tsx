import React from "react";
const ComputerDesk_01: React.FC<
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
        d="M6.25 3c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 16 9.75h-1.361l.208 1.25H22a1 1 0 1 1 0 2h-1v9a1 1 0 1 1-2 0v-4.25h-6A1.75 1.75 0 0 1 11.25 16v-3H5v9a1 1 0 1 1-2 0v-9H2a1 1 0 1 1 0-2h7.153l.208-1.25H8A1.75 1.75 0 0 1 6.25 8zm5.139 6.75L11.181 11h1.639l-.209-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerDesk_01;
