import React from "react";
const Robot_01: React.FC<
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
      <path fill="currentColor" d="M4.25 22a7.75 7.75 0 0 1 15.5 0v.75H4.25z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 1.25v2h6.5v2.284c0 1.139 0 2.04-.062 2.766-.063.743-.195 1.37-.499 1.94a4.75 4.75 0 0 1-1.95 1.95c-.569.303-1.196.435-1.939.498-.726.062-1.627.062-2.766.062-1.138 0-2.109 0-2.834-.062-.743-.063-1.37-.195-1.94-.499a4.75 4.75 0 0 1-1.95-1.95c-.303-.569-.435-1.196-.498-1.939-.062-.725-.062-1.627-.062-2.766V3.25h6.5v-2zM10.51 6.5H8.5v2h2.01zm4.99 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Robot_01;
