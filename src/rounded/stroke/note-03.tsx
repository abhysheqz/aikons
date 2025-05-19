import React from "react";
const Note_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 2v2m-5-2v2M7 2v2M3.5 10c0-3.3 0-4.95 1.025-5.975S7.2 3 10.5 3h3c3.3 0 4.95 0 5.975 1.025S20.5 6.7 20.5 10v5c0 3.3 0 4.95-1.025 5.975S16.8 22 13.5 22h-3c-3.3 0-4.95 0-5.975-1.025S3.5 18.3 3.5 15z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.5 16H17M13.5 9H17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 10s.5 0 1 1c0 0 1.588-2.5 3-3M7 17s.5 0 1 1c0 0 1.588-2.5 3-3"
      />
    </svg>
  );
};
export default Note_03;
