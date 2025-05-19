import React from "react";
const Key_01: React.FC<
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
        fillRule="evenodd"
        d="M15.5 1.75a6.75 6.75 0 0 0-6.351 9.04l-6.594 6.594a2.75 2.75 0 0 0-.805 1.944V21.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-1.25H7.5a.75.75 0 0 0 .75-.75v-1.25H9.5a.75.75 0 0 0 .53-.22l3.18-3.179A6.75 6.75 0 1 0 15.5 1.75m2.53 5.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Key_01;
