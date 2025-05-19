import React from "react";
const UserTime_02: React.FC<
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
      <circle
        cx={9.5}
        cy={6}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 18.5-1.5-.6v-2.4m-4 2a4 4 0 1 0 8 0 4 4 0 0 0-8 0M3 18.5v-3.015c0-.621.282-1.22.816-1.536C5.343 13.046 7.33 12.5 9.5 12.5c1.054 0 2.065.129 3 .364"
      />
    </svg>
  );
};
export default UserTime_02;
