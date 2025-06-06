import React from "react";
const ThermometerCold: React.FC<
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
        d="M17.5 22a4 4 0 0 0 2.902-6.752c-.506-.535-.76-.802-.83-.98-.072-.179-.072-.415-.072-.886V4a2 2 0 1 0-4 0v9.382c0 .472 0 .707-.071.886-.071.178-.325.445-.831.98A4 4 0 0 0 17.5 22M9.045 5v3.656m0 0v5.688m0-5.688 2.046-2.031M9.045 8.656 7 6.625m2.045 7.719V18m0-3.656L7 16.375m2.045-2.031 2.046 2.031M4.136 9.469 6.182 11.5m0 0-2.046 2.031M6.182 11.5H11.5m-5.318 0H2.5"
      />
    </svg>
  );
};
export default ThermometerCold;
