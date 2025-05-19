import React from "react";
const GoogleDrive: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3 2 16l3 5M9 3h6l7 13M9 3l3 5.4M5 21h14l3-5M5 21l2.778-5M22 16h-5.778m-8.444 0h8.444m-8.444 0L12 8.4m4.222 7.6L12 8.4"
      />
    </svg>
  );
};
export default GoogleDrive;
