import React from "react";
const DatabaseImport: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 12c0 1.542 3.49 2.814 8 3M7 11c.602.18 1.274.39 2 .5M7 18c.602.18 1.274.39 2 .5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c-4.418 0-8-1.343-8-3V5m16 0v6.5M15 19l2.5 2.5L20 19m-2.5-5v6.891"
      />
    </svg>
  );
};
export default DatabaseImport;
