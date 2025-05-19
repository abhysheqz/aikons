import React from "react";
const Sunrise: React.FC<
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
        d="M9.5 6.5 12 4l2.5 2.5M12 10V4.64M18.5 10.5 17 12M7 12l-1.5-1.497M5 17H3m18 0h-2M21 20H3M16 17a4 4 0 0 0-8 0"
      />
    </svg>
  );
};
export default Sunrise;
