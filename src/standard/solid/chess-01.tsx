import React from "react";
const Chess_01: React.FC<
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
        d="M7.98 1.424A.75.75 0 0 0 6.75 2v4.5c0 .199.079.39.22.53l2.235 2.235-.875 6.122a1.25 1.25 0 0 1-.237.573l-.796 1.06a1 1 0 0 0-.087.023H5.5a1 1 0 0 0-.022 2A3 3 0 0 0 5 20.667V22a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.333a3 3 0 0 0-.477-1.624 1 1 0 0 0-.023-2h-1.71a1 1 0 0 0-.087-.022l-.796-1.061a1.25 1.25 0 0 1-.237-.573l-.874-6.122L17.03 7.03a.75.75 0 0 0 .22-.53V2a.75.75 0 0 0-1.23-.576L13.229 3.75h-2.457zM7.2 20.067l.768-1.024h8.064l.768 1.024a1 1 0 0 1 .2.6V21H7v-.333a1 1 0 0 1 .2-.6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chess_01;
