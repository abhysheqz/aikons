import React from "react";
const CalendarFavorite_01: React.FC<
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
        strokeWidth={1.5}
        d="m14.84 22 2.41-1.296L19.66 22l-.535-2.593L21 17.593l-2.616-.214L17.25 15l-1.134 2.379-2.616.214 1.875 1.814z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 2v4m-9-4v4M21 14V4H3v18h8M3 10h18"
      />
    </svg>
  );
};
export default CalendarFavorite_01;
