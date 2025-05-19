import React from "react";
const UserAi: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 2.458A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.045-.16-2.053-.458-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5.5 19.5l.56-.98A5 5 0 0 1 10.402 16h3.196a5 5 0 0 1 4.341 2.52l.56.98M18.974 2A3.82 3.82 0 0 1 16 4.973v.054A3.82 3.82 0 0 1 18.974 8h.052A3.82 3.82 0 0 1 22 5.027v-.054A3.82 3.82 0 0 1 19.026 2z"
      />
    </svg>
  );
};
export default UserAi;
