import React from "react";
const CalendarBlock_01: React.FC<
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
        d="m19.778 16.222-4.536 4.536M21 18.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 13V4H3v18h9M3 10h18"
      />
    </svg>
  );
};
export default CalendarBlock_01;
