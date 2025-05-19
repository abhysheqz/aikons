import React from "react";
const NoMeetingRoom: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M2.252 3v18c0 .414.336.75.75.75h17.833a.89.89 0 0 0 .64-.276L2.471 2.47a.75.75 0 0 0-.22.53M21.752 6.22c0-.535-.41-.97-.917-.97h-3.083V3a.75.75 0 0 0-.75-.75H5.787l11.965 11.965V7.191h2.167v9.19l1.833 1.834z"
      />
    </svg>
  );
};
export default NoMeetingRoom;
