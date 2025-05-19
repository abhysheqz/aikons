import React from "react";
const Fuel_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 6.5A2.75 2.75 0 0 1 6 3.75h7.667c.378 0 .747.123 1.05.35l5.333 4c.44.33.7.85.7 1.4V20A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20zm9.15 1.05a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 1 1-.9 1.2l-4-3a.75.75 0 0 1-.15-1.05m.113 4.903a.75.75 0 0 0-1.026 0h-.001l-.002.003-.006.005-.02.019a9 9 0 0 0-.312.313 13 13 0 0 0-.732.832 7.6 7.6 0 0 0-.763 1.131c-.21.394-.401.875-.401 1.369 0 1.495 1.277 2.625 2.75 2.625s2.75-1.13 2.75-2.625c0-.494-.19-.975-.4-1.369a7.6 7.6 0 0 0-.764-1.13 13 13 0 0 0-1.045-1.146l-.02-.019-.005-.005z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 2.75a.25.25 0 0 0-.25.25v1.5h-1.5V3c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v1.5h-1.5V3a.25.25 0 0 0-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fuel_02;
