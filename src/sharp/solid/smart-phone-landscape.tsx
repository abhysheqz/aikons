import React from "react";
const SmartPhoneLandscape: React.FC<
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
        d="M1.25 4.75v14.5h21.5V4.75zm17.25 7.252a1 1 0 1 0 2 0v-.01a1 1 0 1 0-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhoneLandscape;
