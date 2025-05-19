import React from "react";
const PrayerRug_01: React.FC<
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
        d="M8.5 6.5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-15a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2h3a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-3a2 2 0 0 0-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 10.5h1s1-.5 1.5-.5c1.746 0 2 1.5 3.5 3-1.5 1.5-1.754 3-3.5 3-.5 0-1.5-.5-1.5-.5h-1M20.5 15h2m-2 3.5h2m-2-7.5h2m-2-3.5h2"
      />
    </svg>
  );
};
export default PrayerRug_01;
