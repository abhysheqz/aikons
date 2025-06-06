import React from "react";
const Bug_02: React.FC<
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
        cy={13}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={6.5}
        ry={8}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.002 10c-1.959 0-3.77-.556-5.248-1.5m5.248 1.5c1.958 0 3.77-.556 5.248-1.5M12.002 10v3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 13.5H3M21 13.5h-2.5"
      />
      <path
        fill="currentColor"
        d="M3.75 6.5a.75.75 0 0 0-1.5 0zm-1.5 0c0 2.127 1.117 4.322 3.627 4.74l.246-1.48C4.578 9.503 3.75 8.17 3.75 6.5zM4.75 21a.75.75 0 0 1-1.5 0zm-1.5 0c0-2.127 1.117-4.321 3.627-4.74l.246 1.48C5.578 17.997 4.75 19.33 4.75 21zM21.75 6.5a.75.75 0 0 0-1.5 0zm-1.5 0c0 1.67-.828 3.003-2.373 3.26l.246 1.48c2.51-.418 3.627-2.613 3.627-4.74zM20.75 21a.75.75 0 0 1-1.5 0zm-1.5 0c0-1.67-.828-3.003-2.373-3.26l.246-1.48c2.51.418 3.627 2.613 3.627 4.74z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 5.5 7.5 3m7 2.5 2-2.5"
      />
    </svg>
  );
};
export default Bug_02;
