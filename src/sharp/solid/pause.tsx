import React from "react";
const Pause: React.FC<
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
        d="M3.25 4A.75.75 0 0 1 4 3.25h6a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM13.25 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default Pause;
