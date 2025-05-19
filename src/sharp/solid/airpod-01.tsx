import React from "react";
const Airpod_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v5.25h4v-2h11.5v2h4V3a.75.75 0 0 0-.75-.75zM21.75 9.75h-4v2H6.25v-2h-4V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75z"
      />
      <path fill="currentColor" d="M7.75 7.75v2.5h8.5v-2.5z" />
    </svg>
  );
};
export default Airpod_01;
