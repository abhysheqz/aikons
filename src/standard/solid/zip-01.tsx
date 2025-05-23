import React from "react";
const Zip_01: React.FC<
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
        d="M4.25 16a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .648 1.128L6.306 21.25h2.018a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.648-1.128l2.842-4.872H5a.75.75 0 0 1-.75-.75m6 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-.25v4.5H13a.75.75 0 0 1 0 1.5h-2a.75.75 0 1 1 0-1.5h.25v-4.5H11a.75.75 0 0 1-.75-.75m4.5 0a.75.75 0 0 1 .75-.75h1.862c.869 0 2.058.44 2.32 1.63.087.398.084.78 0 1.17-.26 1.21-1.46 1.7-2.38 1.7H16.25V22a.75.75 0 0 1-1.5 0zm1.5 2.25h1.051c.555 0 .864-.282.915-.515.04-.188.04-.353 0-.533-.023-.106-.09-.208-.239-.297a1.2 1.2 0 0 0-.615-.155H16.25zM3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zip_01;
