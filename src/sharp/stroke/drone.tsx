import React from "react";
const Drone: React.FC<
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
        strokeWidth={1.5}
        d="M12 7C6.477 7 2 7.895 2 9c0 .896 2.943 1.654 7 1.908V12a3 3 0 1 0 6 0v-1.092c4.057-.254 7-1.012 7-1.908 0-1.105-4.477-2-10-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h3m3 0H6m0 0v4M15 3h3m3 0h-3m0 0v4M5 21v-1.5c0-2.761 2.739-5 5.5-5M19 21v-1.5c0-2.761-2.739-5-5.5-5"
      />
    </svg>
  );
};
export default Drone;
