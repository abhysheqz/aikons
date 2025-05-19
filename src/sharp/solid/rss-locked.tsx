import React from "react";
const RssLocked: React.FC<
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
        d="M20.75 4.875v-.687C20.75 2.669 19.484 1.5 18 1.5s-2.75 1.17-2.75 2.688v.687H13.5V12.5h9V4.875zm-3.5-.687c0-.346.301-.688.75-.688s.75.342.75.688v.687h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 6.5a1 1 0 0 1 1-1h8.994v2H3.5V12h-2zM22.5 21.5a1 1 0 0 1-1 1H12v-2h8.5v-6h2zM1.545 15.5c3.435 0 6.955 3.089 6.955 7h2c0-5.089-4.49-9-8.955-9z"
      />
      <path
        fill="currentColor"
        d="M1.5 18.735c1.943 0 3.77 1.82 3.77 3.765h2c0-3.055-2.727-5.765-5.77-5.765zM2.496 20.5a1 1 0 0 0-.996 1c0 .552.446 1 .996 1h.008c.55 0 .996-.448.996-1s-.446-1-.996-1z"
      />
    </svg>
  );
};
export default RssLocked;
