import React from "react";
const Table: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v6.25h19.5V3a.75.75 0 0 0-.75-.75zm18.75 8.5h-9v2.5h9zm0 4h-9v2.5h9zm0 4h-9v3H21a.75.75 0 0 0 .75-.75zm-10.5 3v-3h-9V21c0 .414.336.75.75.75zm-9-4.5h9v-2.5h-9zm0-4h9v-2.5h-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Table;
