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
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 22 9)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12h10M2 12c0 .562.438.99 1.314 1.844L4.971 15.5M2 12c0-.562.438-.99 1.314-1.844L4.97 8.5"
      />
    </svg>
  );
};
export default MoveLeft;
