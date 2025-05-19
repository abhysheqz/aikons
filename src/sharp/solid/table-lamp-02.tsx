import React from "react";
const TableLamp_02: React.FC<
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
        d="M4 22.25v-3h2v3zm14 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 20.25H2a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75h9.25zm1.5-9.5v9.5H22a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75zm5.25 5.5h-2v-1.5h2zm-12 0h2v-1.5H6z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M3.25 6.5a4.75 4.75 0 0 1 9.5 0v.75h-9.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 11.5v-5h1.5v5zM10.25 8.5v-2h1.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TableLamp_02;
