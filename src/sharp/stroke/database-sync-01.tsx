import React from "react";
const DatabaseSync_01: React.FC<
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
        d="M10 15c-4.418 0-8-1.343-8-3M9 11.477a18.3 18.3 0 0 1-3-.378m3 7.378a18.3 18.3 0 0 1-3-.378"
      />
      <ellipse
        cx={10}
        cy={5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 22c-4.418 0-8-1.343-8-3V5m16 0v6M12 15.5l1.136 1.465a4 4 0 0 1 7.364-.901m1.5 4.434-1.136-1.463a4 4 0 0 1-7.328.965"
      />
    </svg>
  );
};
export default DatabaseSync_01;
