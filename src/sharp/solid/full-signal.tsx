import React from "react";
const FullSignal: React.FC<
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
        d="M16.25 4.25h4.5v15.5h-4.5zM9.75 7.25h4.5v12.5h-4.5zM3.25 11.25h4.5v8.5h-4.5z"
      />
    </svg>
  );
};
export default FullSignal;
