import React from "react";
const Jar: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 8h-3.5m3.5 3.337h-3.5m3.5 3.331h-3.5m3.5 3.32L15.5 18M4 9.5V4.005a2 2 0 0 1 2.005-2l.99.003m0 0h13.904a.1.1 0 0 1 .084.155L19.43 4.491a2 2 0 0 0-.337 1.11V20a2 2 0 0 1-2 2H8.994a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default Jar;
