import React from "react";
const Typescript_02: React.FC<
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
        d="M5.25 16a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H9.25V22a.75.75 0 0 1-1.5 0v-5.25H6a.75.75 0 0 1-.75-.75M13.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-3.25v1.5H18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h3.25v-1.5H14a.75.75 0 0 1-.75-.75zM3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Typescript_02;
