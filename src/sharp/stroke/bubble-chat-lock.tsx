import React from "react";
const BubbleChatLock: React.FC<
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
        d="M20.5 5.5V4a2 2 0 0 0-4.002 0v1.5m-1.5 0H22V11h-7.002z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.992 12h.01m-4.007 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.912 2.176C7.022.989 2 5.999 2 11.499c0 2.679 1.152 5.01 2.981 6.791l-.993 3.697A.01.01 0 0 0 4 22l3.946-1.785c1.217.51 2.561.794 3.975.794 4.568 0 8.356-2.887 9.578-7.035"
      />
    </svg>
  );
};
export default BubbleChatLock;
