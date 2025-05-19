import React from "react";
const Binoculars: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 16.5a3.5 3.5 0 1 0 6.855-1M15 16.5a3.5 3.5 0 0 1 6.855-1M15 16.5l-.498-10.176C14.448 5.057 15.475 4 16.76 4c1.005 0 1.888.655 2.17 1.607l2.925 9.893M10 8h4m-5 8h6M2.145 15.5 5.07 5.607A2.26 2.26 0 0 1 7.24 4c1.284 0 2.31 1.057 2.257 2.324L9 16.5m-6.855-1A3.5 3.5 0 1 0 9 16.5m-6.855-1A3.502 3.502 0 0 1 9 16.5"
      />
    </svg>
  );
};
export default Binoculars;
