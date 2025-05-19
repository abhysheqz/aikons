import React from "react";
const RowInsert: React.FC<
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
        d="M6.47 10.53a.75.75 0 0 1-.22-.531l.01-7a.75.75 0 0 1 .75-.749H22a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.53-.22M6.47 21.53a.75.75 0 0 1-.22-.531l.01-7a.75.75 0 0 1 .75-.749H22a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.53-.22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.217 12 1.25 14.36l1.536 1.28L5.82 12 2.786 8.36 1.25 9.64z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RowInsert;
