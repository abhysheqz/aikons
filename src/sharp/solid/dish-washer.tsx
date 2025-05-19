import React from "react";
const DishWasher: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v5.25h19.5V3a.75.75 0 0 0-.75-.75zm7 3.746H6v-1.5h4zm7.75.009v-1.51h-1.5v1.51zM21.75 9.75H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM9.25 13.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M5.5 15.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m9.888-3.737a.75.75 0 0 0-.888.737v6.75H16V17h1.75a.75.75 0 0 0 .738-.883l-.402-2.227-.005-.024c-.129-.603-.563-1.016-1.026-1.285-.466-.272-1.048-.453-1.667-.568"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DishWasher;
