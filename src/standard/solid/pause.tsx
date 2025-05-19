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
        fillRule="evenodd"
        d="M3.25 5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 9 20.75H5A1.75 1.75 0 0 1 3.25 19zM13.25 5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 19 20.75h-4A1.75 1.75 0 0 1 13.25 19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pause;
