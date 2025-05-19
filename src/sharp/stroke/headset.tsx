import React from "react";
const Headset: React.FC<
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
        d="M15 10v8h2a4 4 0 0 0 0-8zM9 10v8H7a4 4 0 0 1 0-8z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 14v-3a9 9 0 0 1 18 0v11h-9"
      />
    </svg>
  );
};
export default Headset;
