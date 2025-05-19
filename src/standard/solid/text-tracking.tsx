import React from "react";
const TextTracking: React.FC<
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
        d="M5.383 16.076A1 1 0 0 1 6 17v1h12v-1a1 1 0 0 1 1.707-.707l2 2a1 1 0 0 1 0 1.414l-2 2A1 1 0 0 1 18 21v-1H6v1a1 1 0 0 1-1.707.707l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.09-.217M15.06 2.658A1 1 0 0 1 16 2h1a1 1 0 0 1 .94.658l2.538 6.979.015.043 1.447 3.978a1 1 0 0 1-1.88.684L18.846 11h-4.69l-1.215 3.342a1 1 0 0 1-1.88-.684l1.447-3.978.016-.044zM14.882 9h3.236L16.5 4.551zM12.379 2.075a1 1 0 0 1 .547 1.304l-4.5 11a1 1 0 0 1-1.851 0l-4.5-11a1 1 0 1 1 1.85-.757L7.5 11.359l3.575-8.737a1 1 0 0 1 1.304-.547"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextTracking;
