import React from "react";
const Joystick_05: React.FC<
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
        d="M15.5 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM19 22H5a1 1 0 0 1-1-1v-2.333a2 2 0 0 1 .4-1.2l2-2.667A2 2 0 0 1 8 14h8a2 2 0 0 1 1.6.8l2 2.667a2 2 0 0 1 .4 1.2V21a1 1 0 0 1-1 1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 19h3M12 9v7"
      />
    </svg>
  );
};
export default Joystick_05;
