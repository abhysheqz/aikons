import React from "react";
const Asteroid_02: React.FC<
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
        d="m17.25 4.164 1.5-1.5-1.414-1.414-1.5 1.5zm-3.354 3.354 1.854-1.854-1.414-1.414-2.374 2.374a8.25 8.25 0 1 0 1.934.894m0 0a8.2 8.2 0 0 0-1.934-.894L6.336 12.25l1.414 1.414zm5.354 2.646 3.5-3.5-1.414-1.414-3.5 3.5zm-7.457 6.5 2.957-3-1.414-1.414-3 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asteroid_02;
