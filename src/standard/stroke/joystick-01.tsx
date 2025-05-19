import React from "react";
const Joystick_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.276 20.553A1 1 0 0 1 16.382 22H7.618a1 1 0 0 1-.894-1.447l.723-1.447A2 2 0 0 1 9.237 18h5.527a2 2 0 0 1 1.789 1.106zM8.5 12h7"
      />
      <path
        fill="currentColor"
        d="M12.75 12a.75.75 0 0 0-1.5 0zm-1.5 0v6h1.5v-6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 12c0-1.6-.667-2.667-1-3l1-1.5L13 6l1-1.5c-.333-.833-1-2.5-3-2.5-1.5 0-2 1-2 1 .5 1 2 4 1 9"
      />
    </svg>
  );
};
export default Joystick_01;
