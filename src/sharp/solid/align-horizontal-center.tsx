import React from "react";
const AlignHorizontalCenter: React.FC<
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
        d="M10.998 5V2h2v3zm0 9v-4h2v4zm0 8v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.468 4.47a.75.75 0 0 1 .53-.22l8 .003a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75V5c0-.199.08-.39.22-.53M3.468 13.47a.75.75 0 0 1 .53-.22l16 .003a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-16a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .22-.53"
      />
    </svg>
  );
};
export default AlignHorizontalCenter;
