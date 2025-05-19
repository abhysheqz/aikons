import React from "react";
const BatteryEmpty: React.FC<
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
        d="M1.25 8A2.75 2.75 0 0 1 4 5.25h13A2.75 2.75 0 0 1 19.75 8v8A2.75 2.75 0 0 1 17 18.75H4A2.75 2.75 0 0 1 1.25 16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.26 9.375a.75.75 0 0 1 .865-.614l2.166.365a1.75 1.75 0 0 1 1.46 1.726v2.296a1.75 1.75 0 0 1-1.46 1.726l-2.166.366a.75.75 0 0 1-.25-1.48l2.167-.365a.25.25 0 0 0 .208-.247v-2.296a.25.25 0 0 0-.208-.247l-2.167-.365a.75.75 0 0 1-.614-.865"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryEmpty;
