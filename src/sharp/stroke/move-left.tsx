import React from "react";
const MoveLeft: React.FC<
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
        cx={3}
        cy={3}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 22 9)"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 12H2.407m2.564 3.5L2 12l2.97-3.5"
      />
    </svg>
  );
};
export default MoveLeft;
