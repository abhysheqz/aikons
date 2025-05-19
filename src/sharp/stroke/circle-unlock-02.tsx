import React from "react";
const CircleUnlock_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 15a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 9.5v-3A4.5 4.5 0 0 1 15.742 4M12 16.5v-3"
      />
    </svg>
  );
};
export default CircleUnlock_02;
