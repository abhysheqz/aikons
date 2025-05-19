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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 16V8c0-2.357 0-3.536-.732-4.268S14.357 3 12 3H8c-2.357 0-3.536 0-4.268.732S3 5.643 3 8v8c0 2.357 0 3.535.732 4.268S5.643 21 8 21h4c2.357 0 3.536 0 4.268-.732C17 19.535 17 18.357 17 16Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 21h6c1.886 0 2.828 0 3.414-.586S21 18.886 21 17v-7c0-1.886 0-2.828-.586-3.414S18.886 6 17 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13 11v2"
      />
    </svg>
  );
};
export default MeetingRoom;
