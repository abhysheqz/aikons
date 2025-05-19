import React from "react";
const RssUnlocked: React.FC<
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
        d="M15.031 4.452A2.96 2.96 0 0 1 18 1.5a2.97 2.97 0 0 1 1.927.707L18.633 3.73A.97.97 0 0 0 18 3.5a.96.96 0 0 0-.969.952v.408H22.5v7.64h-9V4.86h1.531zM1.5 6.5a1 1 0 0 1 1-1h8.994v2H3.5V12h-2zM22.5 21.5a1 1 0 0 1-1 1H12v-2h8.5v-6h2zM1.545 15.5c3.435 0 6.955 3.089 6.955 7h2c0-5.089-4.49-9-8.955-9z"
      />
      <path
        fill="currentColor"
        d="M1.5 18.735c1.943 0 3.77 1.82 3.77 3.765h2c0-3.055-2.727-5.765-5.77-5.765zM2.496 20.5a1 1 0 0 0-.996 1c0 .552.446 1 .996 1h.008c.55 0 .996-.448.996-1s-.446-1-.996-1z"
      />
    </svg>
  );
};
export default RssUnlocked;
