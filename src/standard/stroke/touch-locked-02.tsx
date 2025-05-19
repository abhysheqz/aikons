import React from "react";
const TouchLocked_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 14V3.75a1.75 1.75 0 1 1 3.5 0V9.5c1.498-.067 3.975.227 6 1.748M7.5 22v-2s-1.828-2.09-2.325-2.909c-.643-1.057-1.497-2.2-1.051-3.482C4.624 12.169 7.5 10 7.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 15.5a1.5 1.5 0 0 1 3 0V17h-3z"
      />
    </svg>
  );
};
export default TouchLocked_02;
