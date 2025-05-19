import React from "react";
const SmartPhone_01: React.FC<
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
        d="M7.5 1.25A2.75 2.75 0 0 0 4.75 4v16a2.75 2.75 0 0 0 2.75 2.75h9A2.75 2.75 0 0 0 19.25 20V4a2.75 2.75 0 0 0-2.75-2.75zm4.49 17.25a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhone_01;
