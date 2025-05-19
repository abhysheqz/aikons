import React from "react";
const CallDisabled_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3 3 21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8.129 11.871q-.306-.614-.629-1.371l2.5-3L8 3H3q0 7 2.722 11.278M7.5 16.5Q12 21 21 21v-5l-4.5-2-3 2.5c-1.75-.75-2.875-1.375-3.75-2.25"
      />
    </svg>
  );
};
export default CallDisabled_02;
