import React from "react";
const Wechat: React.FC<
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
        d="M7.75 16c0-4.379 4.105-7.25 8.25-7.25.916 0 1.83.14 2.7.407-.478-3.955-4.274-6.907-8.7-6.907-4.735 0-8.75 3.38-8.75 7.75 0 .611.13 1.335.31 2.002.15.558.346 1.116.56 1.578l-.846 3.23a.75.75 0 0 0 .87.927l3.615-.703c.6.217 1.387.4 2.174.527a6.7 6.7 0 0 1-.183-1.56M7 6a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm5.991 0a1 1 0 1 0 0 2H13a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 10.25c-3.594 0-6.75 2.452-6.75 5.75s3.156 5.75 6.75 5.75c.904 0 2.295-.206 3.193-.507l2.67.495a.75.75 0 0 0 .86-.937l-.61-2.222c.152-.328.29-.707.396-1.084.138-.488.241-1.028.241-1.495 0-3.298-3.156-5.75-6.75-5.75m-2 3.25a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm3.991 0a1 1 0 0 0 0 2H18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wechat;
