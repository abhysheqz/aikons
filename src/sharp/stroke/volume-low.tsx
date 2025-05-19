import React from "react";
const VolumeLow: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.987 9.002c.625.82.999 1.863.999 3s-.374 2.18-.999 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4.055 15.515 4.922-.027 6.938 4.504c.066.043.043-.048.043-.128V4.14c0-.08.023-.171-.043-.128L8.977 8.516l-4.922-.028c-.055 0-.07.043-.07.098v6.831c0 .055.015.098.07.098Z"
      />
    </svg>
  );
};
export default VolumeLow;
