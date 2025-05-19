import React from "react";
const DiscoverCircle: React.FC<
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 12-.007.006"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m7.006 17 2.487-7.494 7.454-2.488c.079-.026.054-.011.027.067L14.505 14.5zm0 0c-.026.08-.078.028 0 0Z"
      />
    </svg>
  );
};
export default DiscoverCircle;
