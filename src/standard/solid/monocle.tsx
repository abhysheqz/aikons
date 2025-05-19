import React from "react";
const Monocle: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 9a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 1 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m-6 5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m6 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-6 6a1 1 0 0 1 1 1v2q0 .172.028.334a1 1 0 0 1-1.973.332A4 4 0 0 1 14.75 20v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2q0 .339-.055.666a1 1 0 1 1-1.973-.332q.027-.163.028-.334v-2a1 1 0 0 1 1-1m-4.943 5.496a1 1 0 0 1 1.276-.61 2 2 0 0 0 1.334 0 1 1 0 1 1 .666 1.886 4 4 0 0 1-2.666 0 1 1 0 0 1-.61-1.276"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Monocle;
