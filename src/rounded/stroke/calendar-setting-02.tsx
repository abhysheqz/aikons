import React from "react";
const CalendarSetting_02: React.FC<
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
        d="M12 18v1.5m0-1.5a2 2 0 0 0 1.728-.992M12 18a2 2 0 0 1-1.728-.992M12 14v-1.5m0 1.5a2 2 0 0 1 1.728.992M12 14a2 2 0 0 0-1.728.992M15 14.25l-1.272.742M9 17.75l1.272-.742M15 17.75l-1.272-.742M9 14.25l1.272.742m3.456 2.016A2 2 0 0 0 14 16c0-.368-.1-.712-.272-1.008m-3.456 0A2 2 0 0 0 10 16c0 .368.1.712.272 1.008"
      />
    </svg>
  );
};
export default CalendarSetting_02;
