import React from "react";
const Tornado_02: React.FC<
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
        strokeWidth={1.5}
        d="M9.017 6.159c1.977-1.386 8.9-2.6 9.889 0 1.48 3.89-15.029 6.222-13.845 0C5.555 3.558 10.5 2 12.973 2M18 11.193c-2.577 1.878-9.423 2.631-12 .589M14.022 21.694c-.978.188-2.014.295-3.022.306M7 15.166c2.077.878 5.384.791 8 .115M8.04 18.504c1.453.356 3.247.381 4.959.16"
      />
    </svg>
  );
};
export default Tornado_02;
