import React from "react";
const BiometricAccess: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 9H4l.001 13H20zM16.5 8.998v-2.5a4.5 4.5 0 1 0-9 0v2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 17.5V16a4 4 0 0 1 8 0v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.5 19v-3a1.5 1.5 0 0 1 3 0m0 3v-.5"
      />
    </svg>
  );
};
export default BiometricAccess;
