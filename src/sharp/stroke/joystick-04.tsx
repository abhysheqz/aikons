import React from "react";
const Joystick_04: React.FC<
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
        d="m12 18 7-3.5v4L12 22l-7-3.5v-4zM19 14.5 12 11l-7 3.5M15.5 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM12 9v5.5"
      />
    </svg>
  );
};
export default Joystick_04;
