import React from "react";
const LockSync_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 10 3 1c-.503-5.053-4.777-9-9.975-9C6.488 2 2 6.477 2 12s4.488 10 10.025 10c4.11 0 7.643-2.468 9.19-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 11V9.5a2 2 0 1 0-4 0V11m-1.5 0h7v5.5h-7z"
      />
    </svg>
  );
};
export default LockSync_01;
