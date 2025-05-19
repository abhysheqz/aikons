import React from "react";
const ImageRemove_02: React.FC<
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
        d="M1.75 1.752h20.5V3.75H12v4.5h10.25v14.002H1.75zm7.247 8.254 5.25 5.25L17 12.504l3.298 2.931V20.3H3.7v-4.998z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.25 5h9v2h-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageRemove_02;
