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
        d="M15.25 6.22c0-.535.41-.97.917-.97h4.666c.507 0 .917.435.917.97v14.56c0 .535-.41.97-.917.97h-4.666a.9.9 0 0 1-.649-.284 1 1 0 0 1-.268-.687zm1.833.971V19.81h2.834V7.19z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.25 8.25v3h1.5v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MeetingRoom;
