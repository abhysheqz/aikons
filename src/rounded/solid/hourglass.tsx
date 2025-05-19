import React from "react";
const Hourglass: React.FC<
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
        d="M6.188 2.25v2.864c0 3.163 2.602 5.727 5.812 5.727s5.813-2.564 5.813-5.727V2.25h1.937v2.864c0 4.217-3.47 7.636-7.75 7.636S4.25 9.331 4.25 5.114V2.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.25 21.75h15.5v-2.864c0-4.217-3.47-7.636-7.75-7.636s-7.75 3.419-7.75 7.636z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hourglass;
