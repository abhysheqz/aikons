import React from "react";
const CallBlocked_02: React.FC<
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
        d="M19.975 8.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95-4.95-4.95"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 3H3q0 18 18 18v-5l-4.5-2-3 2.5C10 15 9 14 7.5 10.5l2.5-3z"
      />
    </svg>
  );
};
export default CallBlocked_02;
