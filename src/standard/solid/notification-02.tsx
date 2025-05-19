import React from "react";
const Notification_02: React.FC<
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
        d="M4.75 9a7.25 7.25 0 0 1 14.5 0v5.307c0 1.32.803 2.507 2.029 2.997A.75.75 0 0 1 21 18.75H3a.75.75 0 0 1-.279-1.446 3.23 3.23 0 0 0 2.029-2.997zM8.217 20A4.29 4.29 0 0 0 12 22.25 4.29 4.29 0 0 0 15.783 20z"
      />
    </svg>
  );
};
export default Notification_02;
