import React from "react";
const Bus_02: React.FC<
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
      <path fill="currentColor" d="M5.999 18.75v3h2v-3zM15.999 18.75v3h2v-3z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.72 2.25a.974.974 0 0 0-.971.978l.001 15.544c0 .54.435.978.97.978h14.56c.536 0 .97-.438.97-.978L20.25 3.228a.974.974 0 0 0-.97-.978zm.97 10V4.204h12.618v8.044zM7.5 16.75h-2v-1.5h2zm9 0h2v-1.5h-2zm-2.5 0h-4v-1.5h4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 10.78-2.5 2L19 11.22l2.5-2zM3.75 12.78l-2.5-2L2.5 9.22l2.5 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bus_02;
