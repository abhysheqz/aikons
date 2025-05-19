import React from "react";
const LayerMask_01: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75c0 2.927 1.17 5.58 3.067 7.52L18.843 3.671A10.7 10.7 0 0 0 11.75 1M19.9 4.739l-3.44 3.63 5.915 5.027q.124-.806.125-1.646c0-2.679-.98-5.129-2.6-7.011M21.989 15.036 15.426 9.46l-2.362 2.493 7.195 6.366a10.7 10.7 0 0 0 1.728-3.283M19.263 19.439l-7.23-6.397-2.65 2.797 6.668 5.766a10.8 10.8 0 0 0 3.212-2.166M14.41 22.169l-6.06-5.24-3.161 3.337A10.7 10.7 0 0 0 11.75 22.5c.918 0 1.809-.115 2.66-.331"
      />
    </svg>
  );
};
export default LayerMask_01;
