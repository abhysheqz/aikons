import React from "react";
const Certificate_01: React.FC<
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
        strokeWidth={1.5}
        d="M12.005 21.998H3v-20h17v7.5M7 7.999h9m-9 5h5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.016 17.21v4.792l2.484-1.017 2.484 1.017V17.21M21 14.85c0 2.1-1.567 3.666-3.5 3.666S14 16.92 14 14.849c0-1.85 1.567-3.351 3.5-3.351s3.5 1.5 3.5 3.351Z"
      />
    </svg>
  );
};
export default Certificate_01;
