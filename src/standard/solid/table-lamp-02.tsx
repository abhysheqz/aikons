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
        d="M3.25 6c0-2.974 2.399-4.75 4.75-4.75S12.75 3.026 12.75 6a.75.75 0 0 1-.75.75h-.25v.75a.75.75 0 0 1-1.5 0v-.75H9v3.5h2.25v10.5H6V22a1 1 0 1 1-2 0v-1.25A2.75 2.75 0 0 1 1.25 18v-5A2.75 2.75 0 0 1 4 10.25h3v-3.5H4A.75.75 0 0 1 3.25 6M18 20.75V22a1 1 0 1 0 2 0v-1.25A2.75 2.75 0 0 0 22.75 18v-5A2.75 2.75 0 0 0 20 10.25h-7.25v10.5zm-1.5-4.5h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5m-8.25-.75a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TableLamp_02;
