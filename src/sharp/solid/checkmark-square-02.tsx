import React from "react";
const CheckmarkSquare_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.247 5.69-4.794 5.23-1.761-1.762-1.415 1.414 3.239 3.239 6.206-6.77z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkSquare_02;
