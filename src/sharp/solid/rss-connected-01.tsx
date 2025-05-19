import React from "react";
const RssConnected_01: React.FC<
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
        d="m22.5 3.914-6.707 6.707-2.707-2.707L14.5 6.5l1.293 1.293L21.086 2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 5.5a1 1 0 0 1 1-1h9v2h-8V11h-2zM22.5 20.5a1 1 0 0 1-1 1H12v-2h8.5v-10h2zM1.545 14.5c3.435 0 6.955 3.089 6.955 7h2c0-5.089-4.49-9-8.955-9z"
      />
      <path
        fill="currentColor"
        d="M1.5 17.735c1.943 0 3.77 1.82 3.77 3.765h2c0-3.055-2.727-5.765-5.77-5.765zM2.495 19.5a1 1 0 0 0-.995 1c0 .552.446 1 .995 1h.01c.55 0 .995-.448.995-1s-.446-1-.996-1z"
      />
    </svg>
  );
};
export default RssConnected_01;
