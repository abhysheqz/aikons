import React from "react";
const UserTime_02: React.FC<
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
        d="M5.25 6a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 4.642V14.75h-1.5v3.658l2.668 1.067.557-1.393z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.448 12.357A6.24 6.24 0 0 0 10.75 17.5c0 .608.087 1.195.248 1.75H2.25v-5.12l.293-.225C4.289 12.563 6.777 11.75 9.5 11.75c1.401 0 2.74.215 3.948.607"
      />
    </svg>
  );
};
export default UserTime_02;
