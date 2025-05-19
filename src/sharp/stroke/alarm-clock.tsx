import React from "react";
const AlarmClock: React.FC<
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
      <circle
        cx={12}
        cy={13}
        r={9}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 19-2 2m16-2 2 2M19 3.07 22 6M5 3.07 2 6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 8.5v5l2.5 2.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3.5V2M9 2h6"
      />
    </svg>
  );
};
export default AlarmClock;
