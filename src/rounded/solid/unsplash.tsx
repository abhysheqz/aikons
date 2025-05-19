import React from "react";
const Unsplash: React.FC<
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
        d="M8.75 4.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM3.75 11a.75.75 0 0 1 .75-.75H8a.75.75 0 0 1 .75.75v4.25h6.5V11a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default Unsplash;
