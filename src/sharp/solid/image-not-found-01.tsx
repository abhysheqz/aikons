import React from "react";
const ImageNotFound_01: React.FC<
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
        d="M22.25 22.25V1.75H1.75l13.001 13.001L17 12.503l3.298 2.93v4.865zM1.75 5.286V22.25h16.964zm5.983 5.984-4.03 4.03v4.998h13.059zM15.5 6.252a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.164.75 23.25 21.836l-1.414 1.414L.75 2.164z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageNotFound_01;
