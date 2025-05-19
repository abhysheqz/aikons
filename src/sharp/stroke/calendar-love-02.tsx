import React from "react";
const CalendarLove_02: React.FC<
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
        d="M11.5 19s3.5-1.588 3.5-4.167C15 13.821 14.263 13 13.25 13c-1.25 0-1.684 1-1.684 1h-.132S11 13 9.75 13C8.737 13 8 13.82 8 14.833 8 17.412 11.5 19 11.5 19ZM16 2v4M7 2v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20.5 4h-18v18h18zM2.5 10h18"
      />
    </svg>
  );
};
export default CalendarLove_02;
