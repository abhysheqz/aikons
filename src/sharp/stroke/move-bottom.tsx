import React from "react";
const MoveBottom: React.FC<
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
        d="M12.002 12v9.658m3.5-2.629L12.002 22l-3.5-2.97"
      />
      <circle
        cx={3}
        cy={3}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="matrix(0 1 1 0 9 2)"
      />
    </svg>
  );
};
export default MoveBottom;
