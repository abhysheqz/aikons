import React from "react";
const UngroupItems: React.FC<
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
        fill="currentColor"
        d="M1 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M6.5 8.25c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 0 1 15.25 11h-7A1.75 1.75 0 0 1 6.5 9.25zM6.5 14.25c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 0 1 15.25 17h-7a1.75 1.75 0 0 1-1.75-1.75z"
      />
    </svg>
  );
};
export default UngroupItems;
