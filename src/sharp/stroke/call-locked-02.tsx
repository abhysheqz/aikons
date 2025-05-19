import React from "react";
const CallLocked_02: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 3H3q0 18 18 18v-5l-4.5-2-3 2.5C10 15 9 14 7.5 10.5l2.5-3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.5 6.5H14V11h7V6.5h-1.5m-4 0V5a2 2 0 1 1 4 0v1.5m-4 0h4"
      />
    </svg>
  );
};
export default CallLocked_02;
