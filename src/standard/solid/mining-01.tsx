import React from "react";
const Mining_01: React.FC<
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
        d="M4.07 5.5a4.752 4.752 0 0 1 9.168 0zm.412 14A2.75 2.75 0 0 1 1.742 17l-.735-8.09A1.75 1.75 0 0 1 2.75 7h17.81a1.75 1.75 0 0 1 1.743 1.909l-.736 8.087a2.75 2.75 0 0 1-2.732 2.501h-.532a2.751 2.751 0 0 1-5.294.001h-2.706a2.751 2.751 0 0 1-5.293.002zm11.105-1.998a1.25 1.25 0 1 0 1.071 1.996 1.25 1.25 0 0 0-1.07-1.996M7.655 17.5q-.034 0-.068.002a1.25 1.25 0 1 0 1.07 1.997h-.001a1.25 1.25 0 0 0-1-2M14.657 2c-.57 0-1.118.1-1.626.286A6.24 6.24 0 0 1 14.782 5.5h4.46A4.75 4.75 0 0 0 14.656 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mining_01;
