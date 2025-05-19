import React from "react";
const SquareLockCheck_01: React.FC<
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
        d="m22.75 16.043-6.707 6.707-2.707-2.707 1.414-1.414 1.293 1.293 5.293-5.293zM10 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.75 8.25H1.25v14.5H13.92l-2.706-2.707 3.535-3.535 1.293 1.293 2.707-2.707z"
      />
    </svg>
  );
};
export default SquareLockCheck_01;
