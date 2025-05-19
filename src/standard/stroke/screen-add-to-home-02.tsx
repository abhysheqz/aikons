import React from "react";
const ScreenAddToHome_02: React.FC<
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
        d="M6 9h5v5m-.5-4.5L4 16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17v3.5A1.5 1.5 0 0 0 8.5 22h10a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 18.5 2h-10A1.5 1.5 0 0 0 7 3.5V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2h-4l.5 1h3z"
      />
    </svg>
  );
};
export default ScreenAddToHome_02;
