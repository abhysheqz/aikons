import React from "react";
const TwinTower: React.FC<
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
        d="m9.057 19 2.982-4 2.98 4m-5.962-5h5.963M3.095 12V8h4.969v4M4.089 8V4h2.98v4M5.58 4V2M16.102 12V8h5v4M17.007 8V4h2.982v4M18.498 4V2M5.58 22v-3M18.498 22v-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.998 22v-9.99a.01.01 0 0 1 .01-.01h6.98a.01.01 0 0 1 .01.01V22zm0 0H9.875m-.873 0v-9.99a.01.01 0 0 0-.01-.01h-6.98a.01.01 0 0 0-.01.01V22zm0 0h5.123"
      />
    </svg>
  );
};
export default TwinTower;
