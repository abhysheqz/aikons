import React from "react";
const Database_02: React.FC<
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
      <ellipse
        cx={12}
        cy={5}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5M8 8v2.5M8 15v2.5"
      />
    </svg>
  );
};
export default Database_02;
