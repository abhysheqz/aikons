import React from "react";
const Jar: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.003 3.258h.241V20a2.75 2.75 0 0 0 2.75 2.75h8.1a2.75 2.75 0 0 0 2.75-2.75V5.601c0-.247.072-.488.21-.694l1.553-2.328a.85.85 0 0 0-.708-1.321H6.994q-.03 0-.06.002l-.926-.002a3 3 0 0 0-3.008 3v5.495a1 1 0 1 0 2 0V4.258a1 1 0 0 1 1.003-1M15.5 7.25h2.844v1.5H15.5a.75.75 0 0 1 0-1.5m0 3.337h2.844v1.5H15.5a.75.75 0 0 1 0-1.5m2.844 3.331H15.5a.75.75 0 0 0 0 1.5h2.844zm-2.847 3.332 2.847-.01v1.5l-2.841.01a.75.75 0 0 1-.006-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Jar;
