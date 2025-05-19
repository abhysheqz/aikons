import React from "react";
const VolumeOff: React.FC<
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
        d="M14.373 3.35a.75.75 0 0 1 .377.65v6a.75.75 0 0 1-1.286.525L9.73 6.712a.75.75 0 0 1 .156-1.172l3.736-2.187a.75.75 0 0 1 .752-.004m-7 4.02a.75.75 0 0 1 .935.1l6.222 6.222c.141.14.22.331.22.53V20a.75.75 0 0 1-1.156.63L6.78 16.25H4a2.75 2.75 0 0 1-2.75-2.75v-3A2.75 2.75 0 0 1 4 7.75h2.78zM16.393 8.205a1 1 0 0 1 1.402.188A5.93 5.93 0 0 1 19 12c0 .853-.177 1.666-.496 2.4a1 1 0 1 1-1.834-.8c.211-.483.33-1.025.33-1.6 0-.915-.301-1.746-.795-2.393a1 1 0 0 1 .188-1.402M19.325 6.262a1 1 0 0 1 1.413.063C22.14 7.857 23 9.832 23 12a8.23 8.23 0 0 1-1.384 4.55 1 1 0 1 1-1.67-1.1A6.23 6.23 0 0 0 21 12c0-1.621-.64-3.125-1.738-4.325a1 1 0 0 1 .063-1.413"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeOff;
