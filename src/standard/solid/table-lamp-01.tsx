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
        d="M9.566 2.1a1.75 1.75 0 0 1 1.5-.85h1.868a1.75 1.75 0 0 1 1.5.85l1.8 3c.7 1.166-.14 2.65-1.5 2.65H13V11h8a1 1 0 1 1 0 2v9a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0v-9a1 1 0 1 1 0-2h8V7.75H9.266c-1.36 0-2.2-1.484-1.5-2.65zM11 13.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TableLamp_01;
