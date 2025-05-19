import React from "react";
const DiningTable: React.FC<
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
        d="m9.584 7.75.18.897a.75.75 0 0 0 .735.603h3a.75.75 0 0 0 .736-.603l.179-.897h4.55L20.34 5H22V3H2v2h1.662l1.375 2.75zM8.5 17a1 1 0 0 0-.707.293L6.086 19H4v2h2.5a1 1 0 0 0 .707-.293L8.914 19h6.172l1.707 1.707A1 1 0 0 0 17.5 21H20v-2h-2.086l-1.707-1.707A1 1 0 0 0 15.5 17h-1.05l-.215-.647a.75.75 0 0 0-.736-.603h-3a.75.75 0 0 0-.735.603L9.548 17z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 8.5v8h-2v-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiningTable;
