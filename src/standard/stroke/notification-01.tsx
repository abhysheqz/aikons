import React from "react";
const Notification_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 19c0 1.657-1.363 3-3.024 3A2.977 2.977 0 0 1 9 19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12v2l-2 2.5V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.5L19 14v-2a7 7 0 1 0-14 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.439 3.316 11 5h2l.561-1.684A1 1 0 0 0 12.613 2h-1.226a1 1 0 0 0-.948 1.316"
      />
    </svg>
  );
};
export default Notification_01;
