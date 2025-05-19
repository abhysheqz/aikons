import React from "react";
const ThermometerCold: React.FC<
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
        d="M17.5 22a4 4 0 0 0 2-7.465V4a2 2 0 1 0-4 0v10.535a4 4 0 0 0 2 7.465Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 9.5 2 2-2 2M11 6 9 8 7 6m4 10.5-2-2-2 2m4.5-5h-9m6.5-7V18"
      />
    </svg>
  );
};
export default ThermometerCold;
