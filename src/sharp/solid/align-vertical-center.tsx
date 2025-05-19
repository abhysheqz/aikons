import React from "react";
const AlignVerticalCenter: React.FC<
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
        d="M10 11h4v2h-4zm9 0h3v2h-3zM2 11h3v2H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.47 3.47a.75.75 0 0 1 .532-.22l5 .01a.75.75 0 0 1 .748.75V20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V4c0-.2.08-.39.22-.53M13.47 7.47a.75.75 0 0 1 .53-.22l5 .005a.75.75 0 0 1 .75.75V16a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75V8c0-.199.08-.39.22-.53"
      />
    </svg>
  );
};
export default AlignVerticalCenter;
