import React from "react";
const CalendarFavorite_02: React.FC<
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
        d="M16.5 2v4m-9-4v4M21 4H3v18h18zM3 10h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.91 19 12 17.889 14.09 19l-.465-2.222 1.625-1.556-2.268-.183L12 13l-.982 2.039-2.268.183 1.625 1.556z"
      />
    </svg>
  );
};
export default CalendarFavorite_02;
