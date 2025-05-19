import React from "react";
const HoldLocked_01: React.FC<
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
        d="M11 5.5a1.5 1.5 0 0 0-3 0v8l-2.132-2.081a1.736 1.736 0 0 0-2.487.234 1.74 1.74 0 0 0 .008 2.183L8 20.5V22m3-16.5v5.919M11 5.5v-2a1.5 1.5 0 0 1 3 0v2m3 5.919v-3.92m3 3.92v-3.92a1.5 1.5 0 0 0-3 0M14 5.5v5.919M14 5.5a1.5 1.5 0 0 1 3 0v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 17v-1.5a1.5 1.5 0 0 0-3 0V17M15 17h6v5h-6z"
      />
    </svg>
  );
};
export default HoldLocked_01;
