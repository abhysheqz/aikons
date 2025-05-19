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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15c-4.418 0-8-1.343-8-3M11.001 11.477a18.3 18.3 0 0 1-3-.378m3 7.378a18.3 18.3 0 0 1-3-.378"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c-4.418 0-8-1.343-8-3V5m16 0v7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20 19-3 3-3-3m3-5v7.419"
      />
    </svg>
  );
};
export default DatabaseImport;
