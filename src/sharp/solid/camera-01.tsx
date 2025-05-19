import React from "react";
const Camera_01: React.FC<
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
        d="M1.773 5.977a.75.75 0 0 1 .748-.726h4.404l.998-4.001h8.154l.997 4h5.13l.546 17.5H1.25zM16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-3-9h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Camera_01;
