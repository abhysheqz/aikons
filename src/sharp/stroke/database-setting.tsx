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
        d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v6M17 20.714V22.5m0-1.786a3.36 3.36 0 0 1-2.774-1.43M17 20.713a3.36 3.36 0 0 0 2.774-1.43M17 14.285c1.157 0 2.176.568 2.774 1.43M17 14.287a3.36 3.36 0 0 0-2.774 1.43M17 14.287V12.5m4.5 2-1.726 1.217M12.5 20.5l1.726-1.217M12.5 14.5l1.726 1.217M21.5 20.5l-1.726-1.217m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"
      />
    </svg>
  );
};
export default DatabaseSetting;
