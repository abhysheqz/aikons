import React from "react";
const WindPower_01: React.FC<
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
        d="M12 14v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 22H6"
      />
      <circle
        cx={12}
        cy={12.5}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <ellipse
        cx={12}
        cy={5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={2}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.262 17.95c-1.417-.813-2.123-2.234-1.578-3.173s2.137-1.041 3.554-.228c1.417.814 2.123 2.235 1.578 3.174s-2.136 1.041-3.554.228ZM6.738 17.95c1.417-.813 2.123-2.234 1.578-3.173s-2.137-1.041-3.554-.228c-1.417.814-2.123 2.235-1.578 3.174s2.137 1.041 3.554.228ZM12 8v3M13 13l3 2M11 13l-3 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 3C4.81 4.507 3 7.323 3 10.548q.001.743.124 1.452M16.5 3c2.69 1.507 4.5 4.323 4.5 7.548q-.001.743-.124 1.452"
      />
    </svg>
  );
};
export default WindPower_01;
