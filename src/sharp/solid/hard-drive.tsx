import React from "react";
const HardDrive: React.FC<
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
        d="M5.16 2.25a.98.98 0 0 0-.937.695l-2.932 9.75a1 1 0 0 0-.041.28v8.775h21.5v-8.775a1 1 0 0 0-.041-.28l-2.932-9.75a.98.98 0 0 0-.936-.695zm-1.695 10 2.42-8.05h12.228l2.42 8.05zM14.01 16H12v2h2.011zM19 16h-2.011v2H19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HardDrive;
