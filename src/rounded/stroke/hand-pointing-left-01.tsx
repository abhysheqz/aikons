import React from "react";
const HandPointingLeft_01: React.FC<
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
        d="M21.999 8.834h-.948a3 3 0 0 1-1.791-.595L14.357 4.58c-.566-.422-1.267-.759-1.915-.48-1.049.451-1.73 1.723-.158 3.28l1.71 1.598H3.57c-2.044.056-2.145 3.345 0 3.486h5.94c-.192 1.48.852 8.454 5.272 7.437l.633-.143c.92-.206 2.557-.814 3.514-1.485.997-.697 2.585-.451 3.07-.451"
      />
    </svg>
  );
};
export default HandPointingLeft_01;
