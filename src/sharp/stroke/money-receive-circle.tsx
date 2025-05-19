import React from "react";
const MoneyReceiveCircle: React.FC<
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
        d="M13.999 2.2q-.97-.198-2-.2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10q-.002-1.03-.2-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.999 9c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 9V7.5m0 7.5c-.87 0-1.612-.417-1.886-1m1.886 1v1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m22.001 2.005-4.524 4.512m-.464-4.038V6.98H21.5"
      />
    </svg>
  );
};
export default MoneyReceiveCircle;
