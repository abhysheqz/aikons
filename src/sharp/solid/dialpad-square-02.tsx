import React from "react";
const DialpadSquare_02: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2A.75.75 0 0 1 1.25 6zM9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4A.75.75 0 0 1 9.25 6zM17.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM1.25 10A.75.75 0 0 1 2 9.25h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM9.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM17.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM9.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default DialpadSquare_02;
