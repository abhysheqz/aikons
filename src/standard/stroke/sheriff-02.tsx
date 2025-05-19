import React from "react";
const Sheriff_02: React.FC<
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
        strokeWidth={1.5}
        d="M15.062 12.083a3.02 3.02 0 0 1-3.015 3.024 3.02 3.02 0 0 1-3.016-3.024 3.02 3.02 0 0 1 3.016-3.025 3.02 3.02 0 0 1 3.015 3.024Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.8 6.114 2.41-3.1a1 1 0 0 1 1.58 0l2.41 3.1a1 1 0 0 0 .79.386h3.457a1 1 0 0 1 .91 1.414l-1.669 3.672a1 1 0 0 0 0 .828l1.67 3.672a1 1 0 0 1-.911 1.414h-3.458a1 1 0 0 0-.79.386l-2.41 3.1a1 1 0 0 1-1.578 0l-2.41-3.1a1 1 0 0 0-.79-.386H4.553a1 1 0 0 1-.91-1.414l1.669-3.672a1 1 0 0 0 0-.828l-1.67-3.672A1 1 0 0 1 4.554 6.5h3.458a1 1 0 0 0 .79-.386Z"
      />
    </svg>
  );
};
export default Sheriff_02;
