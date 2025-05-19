import React from "react";
const CalendarSetting_01: React.FC<
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
        d="M17.5 20.5c.93 0 1.74-.507 2.171-1.26M17.5 20.5c-.93 0-1.74-.507-2.171-1.26M17.5 20.5V22m0-6.5c.93 0 1.74.507 2.17 1.26M17.5 15.5c-.93 0-1.74.507-2.17 1.26m2.17-1.26V14m3.5 2-1.33.76M14 20l1.329-.76M21 20l-1.329-.76M14 16l1.33.76m4.34 0c.21.365.33.788.33 1.24s-.12.875-.329 1.24m-4.342 0A2.5 2.5 0 0 1 15 18c0-.451.12-.875.33-1.24M16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 12V4H3v18h8M3 10h18"
      />
    </svg>
  );
};
export default CalendarSetting_01;
