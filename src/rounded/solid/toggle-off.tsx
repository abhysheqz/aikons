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
        d="M16 5.25a6.75 6.75 0 0 1 0 13.5H8a6.75 6.75 0 0 1 0-13.5zm-8 3a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ToggleOff;
