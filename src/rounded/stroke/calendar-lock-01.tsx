import React from "react";
const CalendarLock_01: React.FC<
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
        d="M16 2v4M8 2v4M21 12c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12v2c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h.5M3 10h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.736 16.175v-1.39c0-.206.008-.414.082-.606.196-.51.715-1.179 1.66-1.179.944 0 1.484.669 1.68 1.18.073.191.082.399.082.604v1.39m-3.435 5.824h3.386c.997 0 1.805-.807 1.805-1.802v-2.001c0-.995-.808-1.802-1.805-1.802h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802"
      />
    </svg>
  );
};
export default CalendarLock_01;
