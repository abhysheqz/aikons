import React from "react";
const CalendarLock_02: React.FC<
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
        d="M16 2v4M8 2v4M13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12v2c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-2c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4M3 10h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.484 15v-.993a1.507 1.507 0 1 1 3.015 0V15m-2.947.499 2.896-.001c.857 0 1.552.67 1.552 1.499v1.001c0 .828-.695 1.5-1.553 1.5h-2.894C9.695 19.499 9 18.829 9 18v-1.001c0-.828.695-1.5 1.553-1.5"
      />
    </svg>
  );
};
export default CalendarLock_02;
