import React from "react";
const CursorInfo_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 9.99V10m-2-6.002C12 2.894 12.895 2 14 2a1.999 1.999 0 0 1 1.363 3.46C14.757 6.022 14 6.665 14 7.492M16.763 11l2.066 1.828a.505.505 0 0 1-.27.879l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913l.892-16.434a.508.508 0 0 1 .844-.35L9 4.13"
      />
    </svg>
  );
};
export default CursorInfo_01;
