import React from "react";
const Airpod_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v3.25h19.5V3a.75.75 0 0 0-.75-.75zm18.75 5.5h-4v3.5H6.25v-3.5h-4V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zm-14 0v2h8.5v-2zM13.009 13H11v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Airpod_02;
