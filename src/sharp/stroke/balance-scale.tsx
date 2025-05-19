import React from "react";
const BalanceScale: React.FC<
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
      <circle
        cx={12}
        cy={5}
        r={2}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 5H4m10 0h6M17 21H7M12 7v14M22 14a3 3 0 1 1-6 0m6 0-2.5-6h-1L16 14m6 0h-6M8 14a3 3 0 1 1-6 0m6 0L5.5 8h-1L2 14m6 0H2"
      />
    </svg>
  );
};
export default BalanceScale;
