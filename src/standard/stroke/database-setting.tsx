import React from "react";
const DatabaseSetting: React.FC<
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
        strokeWidth={1.5}
        d="M3 12c0 1.53 3.054 2.792 7 2.977"
      />
      <ellipse
        cx={11}
        cy={5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 22c-4 0-7.5-1.343-7.5-3V5m16 0v5.5M17 20.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M17 20.713a3.36 3.36 0 0 0 2.774-1.43M17 14.285c1.157 0 2.176.568 2.774 1.43M17 14.287a3.36 3.36 0 0 0-2.774 1.43M17 14.287V13m4 2-1.226.717M13 20l1.226-.717M13 15l1.226.717M21 20l-1.226-.717m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 11c.602.18 1.274.39 2 .5M6 18c.602.18 1.274.39 2 .5"
      />
    </svg>
  );
};
export default DatabaseSetting;
