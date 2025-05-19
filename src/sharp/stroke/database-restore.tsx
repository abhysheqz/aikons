import React from "react";
const DatabaseRestore: React.FC<
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
        d="M11 15c-4.418 0-8-1.343-8-3M10 11.477a18.3 18.3 0 0 1-3-.378m3 7.378a18.3 18.3 0 0 1-3-.378"
      />
      <ellipse
        cx={11}
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
        d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v6M20.413 13v2.345l-.948-.583a4.04 4.04 0 0 0-2.425-.804c-2.231 0-4.04 1.8-4.04 4.02C13 20.2 14.809 22 17.04 22A4.04 4.04 0 0 0 21 18.783"
      />
    </svg>
  );
};
export default DatabaseRestore;
