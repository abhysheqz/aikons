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
        d="M6 19.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 5A3.75 3.75 0 0 1 5.5 1.25h13A3.75 3.75 0 0 1 22.25 5v2.25H1.75zm11 3.75h9.5V17a3.75 3.75 0 0 1-3.75 3.75h-5.75zm-1.5 0h-9.5V17a3.75 3.75 0 0 0 3.75 3.75h5.75zM9 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m6.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Locker;
