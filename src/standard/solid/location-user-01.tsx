import React from "react";
const LocationUser_01: React.FC<
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
        d="M5.25 14a6.75 6.75 0 0 1 13.5 0v1.8a.95.95 0 0 1-.95.95h-1.714l-1.32 5.28a.95.95 0 0 1-.922.72h-3.688a.95.95 0 0 1-.921-.72l-1.32-5.28H6.2a.95.95 0 0 1-.95-.95z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUser_01;
