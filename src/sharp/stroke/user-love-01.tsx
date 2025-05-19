import React from "react";
const UserLove_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 19.5a7 7 0 0 1 10-6.326M17.5 21.5s4-1.853 4-4.861c0-1.181-.842-2.139-2-2.139a2.09 2.09 0 0 0-1.924 1.167h-.152S16.93 14.5 15.5 14.5c-1.158 0-2 .958-2 2.139 0 3.008 4 4.861 4 4.861Z"
      />
    </svg>
  );
};
export default UserLove_01;
