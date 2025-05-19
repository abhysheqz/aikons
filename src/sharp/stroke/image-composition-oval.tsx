import React from "react";
const ImageCompositionOval: React.FC<
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
        d="M22 5C15.676 1 8.324 1 2 5v14c6.324 4 13.676 4 20 0z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 14.135q1.001-.135 2.016-.132c2.856-.056 5.642.77 7.86 2.331C13.936 17.782 15.381 19.774 16 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 16.896c-1.175-.595-2.391-.897-3.614-.896-1.851-.007-3.684.673-5.386 2"
      />
      <circle
        cx={7.5}
        cy={8.5}
        r={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default ImageCompositionOval;
