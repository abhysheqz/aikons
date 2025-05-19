import React from "react";
const ComputerDesk_02: React.FC<
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
        d="M4 1.25A1.75 1.75 0 0 0 2.25 3v5c0 .966.784 1.75 1.75 1.75h1.361L5.153 11H2a1 1 0 1 0 0 2h1v9a1 1 0 1 0 2 0v-9h6.25v3c0 .966.784 1.75 1.75 1.75h6V22a1 1 0 1 0 2 0v-9h1a1 1 0 1 0 0-2h-1.25V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4h-5.403l-.208-1.25H12A1.75 1.75 0 0 0 13.75 8V3A1.75 1.75 0 0 0 12 1.25zM7.18 11l.209-1.25h1.222L8.82 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerDesk_02;
