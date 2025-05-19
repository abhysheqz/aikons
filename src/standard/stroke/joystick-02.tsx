import React from "react";
const Joystick_02: React.FC<
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
        d="M15.5 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v5M18.023 22H5.977a1 1 0 0 1-.928-1.371l.948-2.372A2 2 0 0 1 7.854 17h8.292a2 2 0 0 1 1.857 1.257l.948 2.372A1 1 0 0 1 18.023 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 17 .594-1.67A2 2 0 0 1 10.478 14h3.044a2 2 0 0 1 1.884 1.33L16 17"
      />
    </svg>
  );
};
export default Joystick_02;
