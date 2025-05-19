import React from "react";
const MoonCloud: React.FC<
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
        d="M5.853 10.365A5.752 5.752 0 0 0 7 21.75h10.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.939"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.127 1.24a1 1 0 0 1 .925-.202 5.53 5.53 0 0 1 3.291 2.586c.313.547.524 1.127.639 1.716a1 1 0 0 1-1.964.381A3.6 3.6 0 0 0 8.67 3.545a4.55 4.55 0 0 1-2.128 2.85 4.49 4.49 0 0 1-3.517.437c.054.472.203.94.453 1.378A3.53 3.53 0 0 0 6.51 10a1 1 0 1 1-.02 2A5.53 5.53 0 0 1 1.74 9.203a5.6 5.6 0 0 1-.571-4.16 1 1 0 0 1 1.577-.551 2.505 2.505 0 0 0 2.787.175 2.58 2.58 0 0 0 1.251-2.545 1 1 0 0 1 .342-.882"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonCloud;
