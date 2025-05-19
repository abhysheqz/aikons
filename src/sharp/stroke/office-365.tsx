import React from "react";
const Office_365: React.FC<
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
        d="M5.385 18.07 14 18.5V6L8.5 7.5v8l-4.015 2.23M20 4l-5.5-2L4 6v12l10.5 4 5.5-2z"
      />
    </svg>
  );
};
export default Office_365;
