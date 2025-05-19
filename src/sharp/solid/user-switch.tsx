import React from "react";
const UserSwitch: React.FC<
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
        d="M5.685 6.916A5.25 5.25 0 0 0 1.75 12v.75h10.5V12c0-2.445-1.672-4.5-3.935-5.084a2.75 2.75 0 1 0-2.63 0M15.685 16.416A5.25 5.25 0 0 0 11.75 21.5v.75h10.5v-.75c0-2.445-1.672-4.5-3.935-5.084a2.75 2.75 0 1 0-2.63 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 14.5v1a4 4 0 0 0 2.662 3.771l-.375-1.499 1.94-.485L9.782 21.5H8.5c-3.318 0-6-2.683-6-6v-1zM12.22 2.5h1.28c3.317 0 6 2.683 6 6v1h-2v-1a4 4 0 0 0-2.662-3.771l.375 1.499-1.94.485z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserSwitch;
