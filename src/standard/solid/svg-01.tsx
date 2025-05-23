import React from "react";
const Svg_01: React.FC<
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
        d="M3.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H4.75v1.5H7a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h2.25v-1.5H4a.75.75 0 0 1-.75-.75zM15.75 16a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-.25h-2v4.5h2v-1H19a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75zM9.237 15.298a.75.75 0 0 1 .965.439l1.548 4.127 1.548-4.127a.75.75 0 1 1 1.404.526l-2.25 6a.75.75 0 0 1-1.404 0l-2.25-6a.75.75 0 0 1 .439-.965M3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.103.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Svg_01;
