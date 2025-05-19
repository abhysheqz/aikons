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
        strokeWidth={1.5}
        d="M20 9.011C20 12.001 19.188 21 15.713 21c-1.818 0-2.972-3.62-3.713-9s-1.895-9-3.713-9C4.812 3 4 12 4 14.989"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12h4M8 12h2M14 12h2M18 12h4"
      />
    </svg>
  );
};
export default Sine_02;
