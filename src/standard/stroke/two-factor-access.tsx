import React from "react";
const TwoFactorAccess: React.FC<
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
        d="M13 9.5H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 20.5h3a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3M11.5 9.5v-3a3 3 0 1 0-6 0v3M18.5 9.5v-3A3 3 0 0 0 14 3.901"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 15 1.5 2 3.5-4"
      />
    </svg>
  );
};
export default TwoFactorAccess;
