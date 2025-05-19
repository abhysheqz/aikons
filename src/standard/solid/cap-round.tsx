import React from "react";
const CapRound: React.FC<
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
        d="M9.75 8.75c1.306 0 2.418.835 2.83 2h8.92v2h-8.92a3.001 3.001 0 1 1-2.83-4m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 4a7.75 7.75 0 1 0 0 15.5h11a.75.75 0 0 0 .75-.75V14h-8.144a4.25 4.25 0 1 1 0-4.5H21.5V4.75a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default CapRound;
