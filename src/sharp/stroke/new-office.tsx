import React from "react";
const NewOffice: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.5 13 1.25 1.152 1.687-.066.229 1.698L11 16.834l-.9 1.45.357 1.676-1.607.523L8.063 22 6.5 21.352 4.937 22l-.787-1.517-1.607-.523.357-1.675-.9-1.45 1.334-1.051.229-1.699 1.687.067z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 9H5m6 0H9M7 6H5m6 0H9M19 15h-2m2-4h-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8v14h8V8zm0 0V2H2v9"
      />
    </svg>
  );
};
export default NewOffice;
