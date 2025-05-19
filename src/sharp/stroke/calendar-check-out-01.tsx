import React from "react";
const CalendarCheckOut_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m18.5 22 2.5-2.5-2.5-2.5m2 2.5H14M16.5 2v4m-9-4v4M21 14V4H3v18h9M3 10h18"
      />
    </svg>
  );
};
export default CalendarCheckOut_01;
