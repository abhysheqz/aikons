import React from "react";
const AudioBook_03: React.FC<
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
        strokeWidth={1.5}
        d="M19.976 2.004H6.116c-1.241 0-3.275.892-3.101 3.256m0 0c.174 2.364 2.153 2.75 3.101 2.75h10.866M3.015 5.26v13.272c-.116 1.063.315 3.278 3.05 3.448h5.9m7.984-11.988V8.01h-2.967m0 0V4.995a.01.01 0 0 0-.01-.01H5.991M17.001 15.44h-3a.01.01 0 0 0-.01.01v3.997q0 .01.01.01h3L20.983 22a.01.01 0 0 0 .015-.008v-9.022a.01.01 0 0 0-.015-.008z"
      />
    </svg>
  );
};
export default AudioBook_03;
