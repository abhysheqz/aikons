import React from "react";
const MoneyReceive_01: React.FC<
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
        d="M11 1.75h2v3.422l1.5-1.5 1.414 1.414L12 9 8.086 5.086 9.5 3.672l1.5 1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 22.25H1.25V6.75h6.732L12 10.767l4.018-4.017h6.732zm-20-1.5h3.18a4 4 0 0 0-3.18-3.18zm18.5-3.18a4 4 0 0 0-3.18 3.18h3.18zM12 11.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.25-.07a4 4 0 0 0 3.18-3.18H2.75zm15.32-3.18a4 4 0 0 0 3.18 3.18V8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyReceive_01;
