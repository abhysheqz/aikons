import React from "react";
const ToggleOn: React.FC<
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
        d="M2 5.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75zm17.75 3h-7.5v7.5h7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ToggleOn;
