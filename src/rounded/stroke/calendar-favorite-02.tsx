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
        d="m12.518 13.433.528 1.065c.072.148.264.29.426.317l.957.16c.612.104.756.551.315.993l-.744.75a.66.66 0 0 0-.156.547l.213.929c.168.735-.219 1.019-.864.635l-.897-.535a.64.64 0 0 0-.594 0l-.896.535c-.642.384-1.032.097-.864-.635l.213-.929a.66.66 0 0 0-.156-.547l-.744-.75c-.438-.442-.297-.89.315-.992l.957-.16a.65.65 0 0 0 .423-.318l.527-1.065c.288-.577.756-.577 1.041 0"
      />
    </svg>
  );
};
export default CalendarFavorite_02;
