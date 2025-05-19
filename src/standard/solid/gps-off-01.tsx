import React from "react";
const GpsOff_01: React.FC<
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
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 12a7 7 0 0 1-.606 2.854l1.49 1.49A8.9 8.9 0 0 0 20.945 13H22a1 1 0 1 0 0-2h-1.055A9.004 9.004 0 0 0 13 3.055V2a1 1 0 1 0-2 0v1.055a8.9 8.9 0 0 0-3.344 1.06l1.49 1.491A7 7 0 0 1 19 12M6.385 4.966A9 9 0 0 0 3.055 11H2a1 1 0 1 0 0 2h1.055A9.004 9.004 0 0 0 11 20.945V22a1 1 0 0 0 2 0v-1.055a9 9 0 0 0 6.034-3.33z"
      />
    </svg>
  );
};
export default GpsOff_01;
