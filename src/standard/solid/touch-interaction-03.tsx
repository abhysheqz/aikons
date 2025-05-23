import React from "react";
const TouchInteraction_03: React.FC<
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
        d="M5.5 3.5a1 1 0 0 0-1 1v.999a1 1 0 0 0 .999 1h1.005a1 1 0 0 1-.002 2H5.497a3 3 0 0 1-2.997-3v-1a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v1a3 3 0 0 1-2.997 3h-.502a1 1 0 1 1-.002-2h.502a1 1 0 0 0 .999-1v-1a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.847 5.762a1.13 1.13 0 0 1 1.117-1.01c.613 0 1.123.5 1.123 1.135v6.705a.404.404 0 1 0 .808 0V9.798c.521.002.91.01 1.217.052.37.05.561.14.698.277.137.138.229.334.28.708.05.385.052.896.052 1.63v.638a.404.404 0 0 0 .807 0v-.667c0-.642 0-1.17-.046-1.596h1.17c.613 0 1.123.5 1.123 1.135v1.639a.404.404 0 0 0 .808 0v-1.242c.53 0 .904.002 1.193.032.293.031.453.088.571.171q.162.115.277.278c.084.12.141.284.173.581.032.303.032.698.032 1.265 0 1.115 0 1.933-.041 2.583-.041.647-.122 1.102-.27 1.491-.028.073-.128.239-.3.48-.163.227-.364.486-.562.734-.171.213-.585.704-.786.943l-.077.092c0 .209 0 .313-.016.4a1 1 0 0 1-.809.809c-.087.015-.191.015-.4.015h-6.94c-.194 0-.29 0-.371-.013a1 1 0 0 1-.824-.824 2.5 2.5 0 0 1-.013-.371l-4.773-6.401-.01-.013a1.39 1.39 0 0 1-.006-1.737 1.356 1.356 0 0 1 1.928-.203l2.102 2.067a.45.45 0 0 0 .765-.321z"
      />
    </svg>
  );
};
export default TouchInteraction_03;
