import React from "react";
const RssError: React.FC<
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
        d="M1.5 6a1 1 0 0 1 1-1H9v2H3.5v4.5h-2zM22.5 21a1 1 0 0 1-1 1H12v-2h8.5v-5.5h2zM1.545 15C4.98 15 8.5 18.089 8.5 22h2c0-5.089-4.49-9-8.955-9z"
      />
      <path
        fill="currentColor"
        d="M1.5 18.235c1.943 0 3.77 1.82 3.77 3.765h2c0-3.055-2.727-5.765-5.77-5.765zM2.496 20a1 1 0 0 0-.996 1c0 .552.446 1 .996 1h.008c.55 0 .996-.448.996-1s-.446-1-.996-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 2a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m.75 6V4.5H16V8zm.009 1.5H16V11h1.509z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RssError;
