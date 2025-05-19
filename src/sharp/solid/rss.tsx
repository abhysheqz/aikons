import React from "react";
const Rss: React.FC<
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
        d="M1.5 4.5a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H12v-2h8.5v-13h-17V10h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.545 13.5c3.435 0 6.955 3.089 6.955 7h2c0-5.089-4.49-9-8.955-9z"
      />
      <path
        fill="currentColor"
        d="M1.5 16.735c1.943 0 3.77 1.82 3.77 3.765h2c0-3.055-2.727-5.765-5.77-5.765zM2.496 18.5a1 1 0 0 0-.996 1c0 .552.446 1 .996 1h.008c.55 0 .996-.448.996-1s-.446-1-.996-1z"
      />
    </svg>
  );
};
export default Rss;
