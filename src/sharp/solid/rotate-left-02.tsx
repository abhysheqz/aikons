import React from "react";
const RotateLeft_02: React.FC<
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
        d="M8.106.75v4.99h4.5V3.745h-1.193a5.17 5.17 0 0 1 3.58-.947c1.863.191 3.696 1.354 4.72 3.391l1.787-.895C20.175 2.658 17.753 1.074 15.2.81a7.18 7.18 0 0 0-5.094 1.415V.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.828 6.941a2.445 2.445 0 0 1 3.317-.88l6.704 3.82-.194-1.027c-.255-1.342.67-2.611 2.016-2.814a2.425 2.425 0 0 1 2.625 1.513l.007.019 2.783 8.548-5.5 7.13-3.215-.362-.032-.007-.387-.078h-.005c-1.525-.307-2.308-.464-3.216-.981-1.519-.865-2.051-2.298-2.075-3.723-.008-.495.103-.988.283-1.545.178-.547.442-1.212.777-2.051l.009-.021.804-2.076-3.81-2.17a2.395 2.395 0 0 1-.89-3.295"
      />
    </svg>
  );
};
export default RotateLeft_02;
