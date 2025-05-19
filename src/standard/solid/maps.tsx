import React from "react";
const Maps: React.FC<
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
        d="M7.25 2.536 2.217 5.052a1.75 1.75 0 0 0-.967 1.566v11.994a1.75 1.75 0 0 0 2.303 1.66L7.25 19.04zm1.5 16.601 5.5 2.357V4.862l-5.5-2.357zm7-13.887v16.5H21A1.75 1.75 0 0 0 22.75 20V7A1.75 1.75 0 0 0 21 5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maps;
