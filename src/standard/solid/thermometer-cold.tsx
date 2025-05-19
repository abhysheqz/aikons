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
        fill="currentColor"
        d="M18 22a4 4 0 0 0 2-7.465V4a2 2 0 1 0-4 0v10.535A4 4 0 0 0 18 22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 3.5a1 1 0 0 1 1 1v1.086l.293-.293a1 1 0 1 1 1.414 1.414L10.5 8.414V10.5H12a1 1 0 1 1 0 2h-1.5v1.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-.293-.293V18a1 1 0 1 1-2 0v-1.086l-.293.293a1 1 0 0 1-1.414-1.414L8.5 14.086V12.5H6.914l-1.707 1.707a1 1 0 0 1-1.414-1.414l.293-.293H3a1 1 0 1 1 0-2h1.086l-.293-.293a1 1 0 0 1 1.414-1.414L6.914 10.5H8.5V8.414L6.793 6.707a1 1 0 0 1 1.414-1.414l.293.293V4.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThermometerCold;
