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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20M17 21H3V3m14 18v-4m0 4h4M17 6h4v11.818m-4-4V3H6.182"
      />
    </svg>
  );
};
export default NoMeetingRoom;
