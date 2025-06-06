import React from "react";
const Jsx_02: React.FC<
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
        d="M16.084 15.376a.75.75 0 0 1 1.04.208l1.376 2.064 1.376-2.064a.75.75 0 1 1 1.248.832L19.401 19l1.723 2.584a.75.75 0 1 1-1.248.832L18.5 20.352l-1.376 2.064a.75.75 0 1 1-1.248-.832L17.599 19l-1.723-2.584a.75.75 0 0 1 .208-1.04M7 15.25a.75.75 0 0 1 .75.75v4.25a2.5 2.5 0 0 1-5 0V20a.75.75 0 0 1 1.5 0v.25a1 1 0 0 0 2 0V16a.75.75 0 0 1 .75-.75m2.75.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h2.25v-1.5H10.5a.75.75 0 0 1-.75-.75zM3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Jsx_02;
