import React from "react";
const Joystick_03: React.FC<
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
        strokeWidth={1.5}
        d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 8v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 13h-3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 22h-17a.5.5 0 0 1-.5-.5v-1.257a3 3 0 0 1 .879-2.122L5.12 16.88A3 3 0 0 1 7.243 16h9.514a3 3 0 0 1 2.122.879l1.242 1.242A3 3 0 0 1 21 20.243V21.5a.5.5 0 0 1-.5.5Z"
      />
    </svg>
  );
};
export default Joystick_03;
