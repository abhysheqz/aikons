import React from "react";
const Coffee_01: React.FC<
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
        d="m19 7-2 15H7L5 7M19 7l-1-3.5c-2.247-2.103-9.975-1.895-12 0L5 7M3 7h18"
      />
      <ellipse
        cx={12}
        cy={14.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={2}
        ry={2.5}
      />
    </svg>
  );
};
export default Coffee_01;
