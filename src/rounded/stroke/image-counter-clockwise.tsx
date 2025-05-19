import React from "react";
const ImageCounterClockwise: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 7.5H8.4c-3.017 0-4.525 0-5.463.911S2 10.79 2 13.722v1.556c0 2.933 0 4.4.937 5.31.938.912 2.446.912 5.463.912h3.2c3.017 0 4.525 0 5.463-.911S18 18.21 18 15.278V11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 17.786-4.067-4.015a.97.97 0 0 0-.682-.271.98.98 0 0 0-.653.245L8.42 17.07l-1.706-1.543a.97.97 0 0 0-.646-.242.96.96 0 0 0-.684.277L2.5 18.5M13 7.5a5 5 0 1 1 8 6m-8-6 1-4m-1 4 3.5 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.49 11.99V12"
      />
    </svg>
  );
};
export default ImageCounterClockwise;
