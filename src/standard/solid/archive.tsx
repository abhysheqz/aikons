import React from "react";
const Archive: React.FC<
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
        d="M5.75 1A3.75 3.75 0 0 0 2 4.75V11h19.5V4.75A3.75 3.75 0 0 0 17.75 1zM21.5 12.5H2v6.25a3.75 3.75 0 0 0 3.75 3.75h12a3.75 3.75 0 0 0 3.75-3.75zM8 6.75A.75.75 0 0 1 8.75 6h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 6.75M8.75 16a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Archive;
