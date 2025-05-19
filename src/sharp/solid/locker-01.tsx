import React from "react";
const Locker_01: React.FC<
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
        d="M3 21.25v-3h2v3zm16 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2.75v16.5H2a.75.75 0 0 1-.75-.75v-15A.75.75 0 0 1 2 2.75zM9 8.25H5v-1.5h4zm-4 3h4v-1.5H5zm4.259 4H7.75v-1.5h1.509zM12.75 19.25H22a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75h-9.25zm6.25-11h-4v-1.5h4zm-4 3h4v-1.5h-4zm2.242 4h1.51v-1.5h-1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Locker_01;
