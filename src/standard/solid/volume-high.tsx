import React from "react";
const VolumeHigh: React.FC<
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
        d="M14.36 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.156.63L6.78 16.25H4a2.75 2.75 0 0 1-2.75-2.75v-3A2.75 2.75 0 0 1 4 7.75h2.78l6.814-4.38a.75.75 0 0 1 .765-.028M16.393 8.205a1 1 0 0 1 1.402.188A5.93 5.93 0 0 1 19 12a5.93 5.93 0 0 1-1.205 3.607 1 1 0 0 1-1.59-1.214A3.93 3.93 0 0 0 17 12c0-.915-.301-1.746-.795-2.393a1 1 0 0 1 .188-1.402"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.325 6.262a1 1 0 0 1 1.413.063C22.14 7.857 23 9.832 23 12s-.86 4.143-2.262 5.675a1 1 0 0 1-1.476-1.35C20.362 15.125 21 13.62 21 12s-.64-3.125-1.738-4.325a1 1 0 0 1 .063-1.413"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeHigh;
