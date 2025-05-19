import React from "react";
const MailUnlock_02: React.FC<
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
        d="M22 11V2.5H2v17h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7 6 4 6-4M16.5 16v-1.5a2 2 0 0 1 3.5-1.323M15 16h7v5.5h-7z"
      />
    </svg>
  );
};
export default MailUnlock_02;
