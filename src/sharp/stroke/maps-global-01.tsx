import React from "react";
const MapsGlobal_01: React.FC<
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
        d="M10.08 2C5.47 2.936 2 7.012 2 11.899 2 17.478 6.522 22 12.101 22c4.887 0 8.963-3.47 9.899-8.08"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.938 18A3.8 3.8 0 0 0 20 17.603m-5.312-.262q.895.39 1.717.58m-5.55-2.973c.413.29.855.638 1.285.938M3 13.826c.322-.157.67-.338 1.063-.493M6.45 13c.562.062 1.192.223 1.906.523"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 7.4c0 4.2-5.5 6.6-5.5 6.6S11 11.6 11 7.4C11 4.418 13.462 2 16.5 2S22 4.418 22 7.4Z"
      />
    </svg>
  );
};
export default MapsGlobal_01;
