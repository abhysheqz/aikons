import React from "react";
const BatteryCharging_01: React.FC<
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
        d="M18.26 9.375a.75.75 0 0 1 .865-.614l2.166.365a1.75 1.75 0 0 1 1.46 1.726v2.296a1.75 1.75 0 0 1-1.46 1.726l-2.166.366a.75.75 0 0 1-.25-1.48l2.167-.365a.25.25 0 0 0 .208-.247v-2.296a.25.25 0 0 0-.208-.247l-2.167-.365a.75.75 0 0 1-.614-.865"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.25A2.75 2.75 0 0 0 1.25 8v8A2.75 2.75 0 0 0 4 18.75h13A2.75 2.75 0 0 0 19.75 16V8A2.75 2.75 0 0 0 17 5.25zm7.624 4.166a.75.75 0 1 0-1.248-.832l-2 3A.75.75 0 0 0 9 12.75h1.599l-1.223 1.834a.75.75 0 1 0 1.248.832l2-3A.75.75 0 0 0 12 11.25h-1.599z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryCharging_01;
