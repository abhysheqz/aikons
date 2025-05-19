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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 21V3H3v18zM17 21V6h4v15z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M13 10.5v3" />
    </svg>
  );
};
export default MeetingRoom;
