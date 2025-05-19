import React from "react";
const CameraOff_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.984 6.002h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.708 14.938a3.43 3.43 0 0 1-2.879 1.577c-1.903 0-3.445-1.569-3.445-3.503 0-1.224.617-2.3 1.551-2.927"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.557 6.014c.254-.052 3.543-.021 4.9 0l.377 11.669M5.92 5.99c-1.065.005-2.353.021-3.101.033-.074 0-.063-.018-.064.035l-.465 15.841a.1.1 0 0 0 .1.103h19.367a.1.1 0 0 0 .07-.17L2.002 1.997m14.75 6.009-1.477-6.005H8.383l-.492 2.001"
      />
    </svg>
  );
};
export default CameraOff_01;
