import React from "react";
const TimeSchedule: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7h2v4.586l1.707 1.707-1.414 1.414L11 12.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.54 14.408a.75.75 0 0 1 .838-.056l6 3.5a.75.75 0 0 1 0 1.296l-6 3.5a.75.75 0 0 1-1.1-.854l.942-3.294-.941-3.294a.75.75 0 0 1 .26-.798"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.205a8.795 8.795 0 1 0 .904 17.545l.198 1.944q-.544.056-1.102.056C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .735-.074 1.454-.215 2.149l-1.916-.389A8.795 8.795 0 0 0 12 3.204"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeSchedule;
