import React from "react";
const SoilMoistureField: React.FC<
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
        d="M6.818 2.612c-.474-.197-.982-.281-1.578-.322-.584-.04-1.304-.04-2.213-.04H2.25v.778c0 .908 0 1.628.04 2.212.04.596.125 1.104.322 1.578a4.75 4.75 0 0 0 2.57 2.57c.474.197.982.282 1.578.322.42.03.91.037 1.49.04l2.26-.027c.41-.028.78-.087 1.13-.233a3.42 3.42 0 0 0 1.85-1.849c.146-.352.205-.72.233-1.13.027-.398.027-.886.027-1.484V4.25h-.776c-.6 0-1.087 0-1.484.027-.41.028-.78.088-1.13.233a3.4 3.4 0 0 0-.99.628 4.75 4.75 0 0 0-2.552-2.526"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 14V9h2v5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 13h10v2H3zM3 16h10v2H3zM3 19h10v2H3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.256 16.942c.263.448.494.992.494 1.561 0 1.582-1.222 3.247-3.25 3.247s-3.25-1.665-3.25-3.247c0-.57.23-1.113.494-1.561.27-.46.62-.894.95-1.259.335-.367.667-.682.914-.905.124-.111.818-.677.892-.739.074.063.768.628.892.74.247.222.579.537.913.904.332.365.68.799.951 1.259"
      />
    </svg>
  );
};
export default SoilMoistureField;
