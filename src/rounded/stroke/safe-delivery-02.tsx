import React from "react";
const SafeDelivery_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C7.582 2 4 5.134 4 9h16c0-3.866-3.582-7-8-7M8 17.333C8 15.403 8.345 15 10 15h4c1.655 0 2 .403 2 2.333v2.334c0 1.93-.345 2.333-2 2.333h-4c-1.655 0-2-.403-2-2.333zM12.008 17.5h-.009M4 9l8 6 8-6"
      />
    </svg>
  );
};
export default SafeDelivery_02;
