import React from "react";
const SoilTemperatureGlobal: React.FC<
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
        d="M12.832 18A10 10 0 0 1 14 16M21.998 8C15.656 8 10.3 12.217 8.578 18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4C13.432 4 6.263 9.984 4.444 18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 22a3 3 0 0 0 1.5-5.599V12h-3v4.401A2.999 2.999 0 0 0 19 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10c.878 0 1.73.113 2.541.326M2 6c1.866 0 3.647.365 5.275 1.028M2 2c3.175 0 6.159.822 8.749 2.265"
      />
    </svg>
  );
};
export default SoilTemperatureGlobal;
