import React from "react";
const CheckmarkCircle_02: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m3.247-14.81-4.794 5.23-1.761-1.762-1.415 1.414 3.239 3.239 6.206-6.77z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_02;
