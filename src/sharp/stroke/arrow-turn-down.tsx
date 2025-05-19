import React from "react";
const ArrowTurnDown: React.FC<
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
        strokeWidth={1.5}
        d="m10.045 15.777 3.99 3.962 3.963-3.957M14.021 20V7.943c0-2.178-1.795-3.943-4.01-3.943s-4.01 1.765-4.01 3.943v4.872"
      />
    </svg>
  );
};
export default ArrowTurnDown;
