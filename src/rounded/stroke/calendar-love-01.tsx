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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 2v4M8 2v4M12 22h-1c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-2c0-3.771 0-5.657 1.172-6.828S7.229 4 11 4h2c3.771 0 5.657 0 6.828 1.172S21 8.229 21 12v.5M3 10h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 22s4-1.853 4-4.861C21 15.958 20.158 15 19 15c-.947 0-1.579.412-2 1.235-.421-.823-1.053-1.235-2-1.235-1.158 0-2 .958-2 2.139C13 20.147 17 22 17 22"
      />
    </svg>
  );
};
export default CalendarLove_01;
