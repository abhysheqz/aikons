import React from "react";
const TableLamp_01: React.FC<
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
        d="M3 13.5H2v-2h20v2h-1v8.75h-2v-4H5v4H3zm7.5 2.25h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.696 7.221A.75.75 0 0 1 16 8.25H8a.75.75 0 0 1-.696-1.028L9.49 1.75h5.016z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 12.5v-5h2v5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TableLamp_01;
