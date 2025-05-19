import React from "react";
const Tiff_01: React.FC<
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
        d="M3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5zM3.25 16a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-1V22A.75.75 0 0 1 5 22v-5.25H4a.75.75 0 0 1-.75-.75m6.75-.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m1.75.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.75v1.5H15a.75.75 0 0 1 0 1.5h-1.75V22a.75.75 0 0 1-1.5 0zm5 0a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-1.75v1.5H20a.75.75 0 0 1 0 1.5h-1.75V22a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tiff_01;
