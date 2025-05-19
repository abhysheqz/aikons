import React from "react";
const CalendarLove_01: React.FC<
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
        d="M17 22s4-1.853 4-4.861C21 15.958 20.158 15 19 15c-1.429 0-1.924 1.167-1.924 1.167h-.152S16.43 15 15 15c-1.158 0-2 .958-2 2.139C13 20.147 17 22 17 22ZM16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 12.5V4H3v18h9M3 10h18"
      />
    </svg>
  );
};
export default CalendarLove_01;
