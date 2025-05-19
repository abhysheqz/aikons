import React from "react";
const CursorMagicSelection_04: React.FC<
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
        d="M9 4V2M5 5 3.5 3.5M4 9H2m3 4-1.5 1.5m11-11L13 5M7.563 7.029l14.172 5.45c.362.14.35.656-.017.778l-6.15 2.05a.41.41 0 0 0-.261.261l-2.05 6.15a.413.413 0 0 1-.777.017L7.029 7.563a.413.413 0 0 1 .534-.534"
      />
    </svg>
  );
};
export default CursorMagicSelection_04;
