import React from "react";
const PrayerRug_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 4h-12a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12s-.5-1-.5-1.5c0-1.747 1.5-2 3-3.5 1.5 1.5 3 1.753 3 3.5 0 .5-.5 1.5-.5 1.5v5h-5zM14.5 4V2M18 4V2m-7.5 2V2M7 4V2M14.5 22v-2m3.5 2v-2m-7.5 2v-2M7 22v-2"
      />
    </svg>
  );
};
export default PrayerRug_02;
