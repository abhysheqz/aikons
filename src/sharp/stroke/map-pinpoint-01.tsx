import React from "react";
const MapPinpoint_01: React.FC<
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
        d="M22 16.5c0 3.5-4.5 5.5-4.5 5.5S13 20 13 16.5a4.5 4.5 0 1 1 9 0ZM11 14.5a3.5 3.5 0 1 1 3.46-4.028"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.966 10.215A9 9 0 0 0 2 11c0 7 9 11 9 11s.66-.294 1.624-.86"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M17.5 16.5h.009"
      />
    </svg>
  );
};
export default MapPinpoint_01;
