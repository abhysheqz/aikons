import React from "react";
const Sine_02: React.FC<
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
        strokeWidth={1.5}
        d="M21 9.011C21 12.001 20.087 21 16.177 21c-2.045 0-3.343-3.62-4.177-9S9.868 3 7.823 3C3.913 3 3 12 3 14.989"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12h3M8 12h2M14 12h2M19 12h3"
      />
    </svg>
  );
};
export default Sine_02;
