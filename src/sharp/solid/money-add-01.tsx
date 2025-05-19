import React from "react";
const MoneyAdd_01: React.FC<
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
        d="M22.75 14.5H21v-3h-4.5v3h-3v4.25H1.25V3.25h21.5zm-20 2.75h3.18a4 4 0 0 0-3.18-3.18zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.25-.07a4 4 0 0 0 3.18-3.18H2.75zm15.32-3.18a4 4 0 0 0 3.18 3.18V4.75z"
      />
      <path fill="currentColor" d="M17.75 17.75h-3v-2h3v-3h2v3h3v2h-3v3h-2z" />
    </svg>
  );
};
export default MoneyAdd_01;
