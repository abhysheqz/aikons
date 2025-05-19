import React from "react";
const House_04: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 9 4.77-4.265C13.066 3.578 13.713 3 14.5 3s1.435.578 2.73 1.735L22 9M8.5 8v12m12 0V8"
      />
      <ellipse
        cx={3.5}
        cy={12}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1.5}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.5 14v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 20h20M12 20v-4c0-.943 0-1.414.293-1.707S13.057 14 14 14h1c.943 0 1.414 0 1.707.293S17 15.057 17 16v4M13.5 11h2m-2-3h2"
      />
    </svg>
  );
};
export default House_04;
