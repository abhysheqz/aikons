import React from "react";
const TennisRacket: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.521 14.84-7.958 1.598L9.16 8.479m9.708 4.425c-2.536 2.537-6.333 2.854-8.48.707-2.146-2.147-1.83-5.943.707-8.48s6.334-2.854 8.48-.707 1.83 5.943-.707 8.48M7.033 15.907l1.06 1.06a.5.5 0 0 1 0 .707l-3.18 3.18a.5.5 0 0 1-.707 0l-1.06-1.06a.5.5 0 0 1 0-.707l3.18-3.18a.5.5 0 0 1 .707 0M16.507 7.484l-.007.007m-3 3.01-.007.006M16.5 10.5l-.007.007m-2.986-3.015L13.5 7.5"
      />
    </svg>
  );
};
export default TennisRacket;
