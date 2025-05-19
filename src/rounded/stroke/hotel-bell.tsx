import React from "react";
const HotelBell: React.FC<
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
        d="M2 20.5h20M3.052 14.775c.467-.296.941-.725 1.01-1.273a8.001 8.001 0 0 1 15.876 0c.069.548.543.977 1.01 1.273.413.262.713.692.799 1.205L22 17H2l.253-1.02a1.77 1.77 0 0 1 .8-1.205M12 6.5v-3m0 0H9.5m2.5 0h2.5M19 5.5l-.5 1m3 1.5-1 .5M5 5.5l.5 1m-2 2-1-.5"
      />
    </svg>
  );
};
export default HotelBell;
