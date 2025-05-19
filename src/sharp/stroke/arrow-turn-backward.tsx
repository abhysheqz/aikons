import React from "react";
const ArrowTurnBackward: React.FC<
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
        d="m8.223 10.045-3.962 3.99 3.957 3.963M4 14.021h12.057c2.178 0 3.943-1.795 3.943-4.01s-1.765-4.009-3.943-4.009h-4.872"
      />
    </svg>
  );
};
export default ArrowTurnBackward;
