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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 18v1.5m0-1.5a2 2 0 0 0 1.728-.992M12 18a2 2 0 0 1-1.728-.992M12 14v-1.5m0 1.5a2 2 0 0 1 1.728.992M12 14a2 2 0 0 0-1.728.992M15 14.25l-1.272.742M9 17.75l1.272-.742M15 17.75l-1.272-.742M9 14.25l1.272.742m3.456 2.016A2 2 0 0 0 14 16c0-.368-.1-.712-.272-1.008m-3.456 0A2 2 0 0 0 10 16c0 .368.1.712.272 1.008M16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 4H3v18h18zM3 10h18"
      />
    </svg>
  );
};
export default CalendarSetting_02;
