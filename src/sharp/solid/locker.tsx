import React from "react";
const Locker: React.FC<
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
        d="M5 21.75v-3h2v3zm12 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2.25a.75.75 0 0 0-.75.75v4.25h21.5V3a.75.75 0 0 0-.75-.75zm20.75 6.5h-10v11H22a.75.75 0 0 0 .75-.75zm-11.5 0h-10V19c0 .414.336.75.75.75h9.25zm-3 6.5v-2h1.5v2zm6-2v2h1.5v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Locker;
