import React from "react";
const Jpg_01: React.FC<
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
        d="M3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5zM7.5 15.25a.75.75 0 0 1 .75.75v4.25a2.5 2.5 0 0 1-5 0V20a.75.75 0 0 1 1.5 0v.25a1 1 0 1 0 2 0V16a.75.75 0 0 1 .75-.75m1.75.75a.75.75 0 0 1 .75-.75h2a2.25 2.25 0 0 1 0 4.5h-1.25V22a.75.75 0 0 1-1.5 0zm1.5 2.25H12a.75.75 0 0 0 0-1.5h-1.25zm4.5-2.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-.25h-2.5v4.5h2.5v-1h-.583a.75.75 0 0 1 0-1.5H20a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Jpg_01;
