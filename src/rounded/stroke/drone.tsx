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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7C6.477 7 2 7.895 2 9c0 .806 2.382 1.5 5.815 1.817.618.057 1.042.655 1.108 1.272C9.094 13.694 10.384 15 12 15s2.906-1.306 3.077-2.91c.066-.618.49-1.216 1.108-1.273C19.618 10.5 22 9.806 22 9c0-1.105-4.477-2-10-2Z"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 3h2m2 0H6m0 0v4M16 3h2m2 0h-2m0 0v4M5 21v-1.5a5 5 0 0 1 5-5m9 6.5v-1.5a5 5 0 0 0-5-5"
      />
    </svg>
  );
};
export default Drone;
