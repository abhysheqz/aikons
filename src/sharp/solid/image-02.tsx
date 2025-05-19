import React from "react";
const Image_02: React.FC<
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
        d="M1.75 1.75h20.5v20.5H1.75zm12.5 5.752a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5.252 2.502 5.25 5.25L17 12.502l3.298 2.931v4.865H3.702V15.3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Image_02;
