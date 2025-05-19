import React from "react";
const LockSync_02: React.FC<
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
        d="M14.25 10.982V9.191C14.25 7.98 13.243 7 12 7s-2.25.98-2.25 2.19v1.792M12 17c-1.933 0-3.5-1.526-3.5-3.407s1.567-3.408 3.5-3.408 3.5 1.526 3.5 3.408S13.933 17 12 17Z"
      />
    </svg>
  );
};
export default LockSync_02;
