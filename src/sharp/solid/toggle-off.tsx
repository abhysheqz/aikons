import React from "react";
const ToggleOff: React.FC<
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
        d="M21.998 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-20a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75zm-17.75 3h7.5v7.5h-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ToggleOff;
