import React from "react";
const AudioBook_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.977 19.488a2.497 2.497 0 1 1-2.496-2.498 2.497 2.497 0 0 1 2.496 2.498Zm0 0v-6.496c.333.5.999 2.998 2.996 2.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.974 1.986H6.094c-1.244 0-3.281.893-3.107 3.259m0 0c.174 2.366 2.157 2.752 3.107 2.752h10.882M2.987 5.245v13.283c-.115 1.064.317 3.28 3.056 3.45h4.927m8.977-10.962V7.997h-2.971m0 0V4.98a.01.01 0 0 0-.01-.01H5.968"
      />
    </svg>
  );
};
export default AudioBook_02;
