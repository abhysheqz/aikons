import React from "react";
const HourglassOff: React.FC<
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
        d="M5 5.02a6.996 6.996 0 0 0 7 6.992c-3.866 0-7 3.13-7 6.993v2.997m14-2.997v2.997M19 22.001H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2.022 20 19.98M6.563 1.998h13.5m-4.022 8.99c.67-.55 2.168-1.664 2.783-4.189.273-1.124.203-3.201.203-4.801"
      />
    </svg>
  );
};
export default HourglassOff;
