import React from "react";
const CallReceived_02: React.FC<
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
        d="m17.328 3.914-1.5 1.5H17.5a4 4 0 0 1 4 4V13h-2V9.414a2 2 0 0 0-2-2h-1.672l1.5 1.5-1.414 1.414L12 6.414 15.914 2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.417-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallReceived_02;
