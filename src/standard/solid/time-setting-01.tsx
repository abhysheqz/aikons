import React from "react";
const TimeSetting_01: React.FC<
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
        d="M9.38 2.12a.75.75 0 0 0-1.017-.272L4.9 3.815a.75.75 0 0 0-.276 1.032C5.76 6.785 4.306 9.283 2 9.283a.75.75 0 0 0-.75.75v3.934c0 .414.336.75.75.75 2.305 0 3.76 2.497 2.621 4.437a.75.75 0 0 0 .277 1.031l3.464 1.967a.75.75 0 0 0 1.017-.272c1.175-2.002 4.069-2.002 5.244 0a.75.75 0 0 0 1.017.272l3.464-1.967a.75.75 0 0 0 .276-1.032c-1.138-1.94.315-4.436 2.62-4.436a.75.75 0 0 0 .75-.75v-3.934a.75.75 0 0 0-.75-.75c-2.305 0-3.76-2.497-2.621-4.436a.75.75 0 0 0-.277-1.032l-3.464-1.967a.75.75 0 0 0-1.017.272c-1.174 2-4.066 2-5.24 0M13 7.5a1 1 0 1 0-2 0V12a1 1 0 0 0 .553.894l3 1.5a1 1 0 1 0 .894-1.788L13 11.382z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeSetting_01;
