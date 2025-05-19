import React from "react";
const TrafficJam_02: React.FC<
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
        d="M9.941 2.25h10.116l1.5 5h1.192v8.5h-1.75V9h-1.512l-.525-1.75h1.029l-1.05-3.5h-7.884l-.075.25H9.416zm-5.999 6h10.116l1.5 5h1.192v8.5h-2.5v-2H3.75v2h-2.5v-8.5h1.192zm.066 5h9.984l-1.05-3.5H5.058zm9.242 3.76h1.5V15.5h-1.5zm-8.5 0h-1.5V15.5h1.5zm1.018 1.24L6.5 17h5l.737 1.25zm11.29-13H6.94L6.416 7h1.566l.075-.25h7.884l1.05 3.5h-1.029l.525 1.75H18v6.75h1.75v-8.5h-1.192z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TrafficJam_02;
