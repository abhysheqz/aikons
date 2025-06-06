import React from "react";
const SoilTemperatureField: React.FC<
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
        d="M3 3c1.864 0 2.796 0 3.53.304A4 4 0 0 1 8.697 5.47C9 6.204 9 7.136 9 9c-1.864 0-2.796 0-3.53-.304A4 4 0 0 1 3.303 6.53C3 5.796 3 4.864 3 3M13 5c-1.242 0-1.864 0-2.354.203-.653.27-1.172.79-1.443 1.443C9 7.136 9 7.757 9 9c1.242 0 1.864 0 2.354-.203a2.67 2.67 0 0 0 1.443-1.443C13 6.864 13 6.243 13 5M9 9v5M13 14H3M13 17H3M13 20H3M19 21a3 3 0 0 0 1.5-5.599V10.5a1.5 1.5 0 0 0-3 0v4.901A2.999 2.999 0 0 0 19 21"
      />
    </svg>
  );
};
export default SoilTemperatureField;
