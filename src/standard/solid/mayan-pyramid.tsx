import React from "react";
const MayanPyramid: React.FC<
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
        d="M17 6.25c.966 0 1.75.784 1.75 1.75v1.75h-3.792l-.586-3.5zM15.75 4.75V3A1.75 1.75 0 0 0 14 1.25h-4A1.75 1.75 0 0 0 8.25 3v1.75h7.5M9.6 6.25l-.58 3.5H5.25V8c0-.966.784-1.75 1.75-1.75zM5 11.25A1.75 1.75 0 0 0 3.25 13v1.75h4.94l.581-3.5zM3 16.25A1.75 1.75 0 0 0 1.25 18v4c0 .414.336.75.75.75h4.89l1.052-6.5zM8.41 22.75l2.711-16.5h1.73l2.883 16.5zM17.256 22.75H22a.75.75 0 0 0 .75-.75v-4A1.75 1.75 0 0 0 21 16.25h-4.952zM20.75 14.75V13A1.75 1.75 0 0 0 19 11.25h-3.79l.587 3.5z"
      />
    </svg>
  );
};
export default MayanPyramid;
