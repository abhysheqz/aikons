import React from "react";
const CoPresent: React.FC<
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
        d="M1 5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3 1 1 0 1 1 0-2 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1 1 1 0 1 1 0 2 3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 21c0-3.241 2.867-5.75 6.25-5.75s6.25 2.509 6.25 5.75a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75M8.75 11a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoPresent;
