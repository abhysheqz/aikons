import React from "react";
const AiBrain_04: React.FC<
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
        d="M7 4.5a3 3 0 0 0-2.567 4.554 3.001 3.001 0 0 0 0 5.893M7 4.5a2.5 2.5 0 0 1 5 0v15a2.5 2.5 0 0 1-5 0 3 3 0 0 1-2.567-4.553M7 4.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 1 6 13.67M19.25 4.75 17 7h-2m3.5-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M19.25 19.25 17 17h-2m3.5 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M19.25 12H15m3.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0"
      />
    </svg>
  );
};
export default AiBrain_04;
