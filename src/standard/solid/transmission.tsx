import React from "react";
const Transmission: React.FC<
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
        d="M4 15a7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9 1 1 0 1 0 0 2m0 3.2A3.8 3.8 0 0 1 7.8 22a1 1 0 1 0 2 0A5.8 5.8 0 0 0 4 16.2a1 1 0 1 0 0 2m0 3.2a.6.6 0 0 1 .6.6 1 1 0 1 0 2 0A2.6 2.6 0 0 0 4 19.4a1 1 0 1 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Transmission;
