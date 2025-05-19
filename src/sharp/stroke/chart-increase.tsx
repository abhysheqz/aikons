import React from "react";
const ChartIncrease: React.FC<
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
        d="M20.962 21H3.002V3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.992 16.996c2.162 0 10.734-.374 11.005-10.519m-3.585 1.551 3.591-2.048L21 9.56"
      />
    </svg>
  );
};
export default ChartIncrease;
