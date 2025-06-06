import React from "react";
const SwipeUp_02: React.FC<
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
        d="M15.5 22v-2l.998-2.31c.707-1.478 1.675-4.367.323-5.728C14.689 9.817 11.708 9.424 10 9.5V3.75a1.75 1.75 0 0 0-3.5 0V14m0 8v-2s-1.828-2.09-2.325-2.909c-.643-1.057-1.497-2.2-1.051-3.482C3.624 12.169 6.5 10 6.5 10M18.5 8V2.741M16 4.5 18.5 2 21 4.5"
      />
    </svg>
  );
};
export default SwipeUp_02;
