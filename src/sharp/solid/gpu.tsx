import React from "react";
const Gpu: React.FC<
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
        d="M1.25 2.25h3.5v19.5H3V4.2H1.25zM6 18.25h3.536l1 2H22.75v-16H6zm10.75-9a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 11.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-1.75-3.75h-3.5v1.5h3.5zm0 3h-3.5v1.5h3.5zm0 3h-3.5v1.5h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gpu;
