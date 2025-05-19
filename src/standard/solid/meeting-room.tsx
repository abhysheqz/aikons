import React from "react";
const MeetingRoom: React.FC<
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
        d="M19 7h-2V5h2a3 3 0 0 1 3 3v13a1 1 0 0 1-1 1h-6.5v-2H20V8a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3zm8.75 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MeetingRoom;
